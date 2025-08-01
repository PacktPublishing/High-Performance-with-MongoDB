// Configure the collection to using preImages (before the changes happen)
db.runCommand({ collMod: "yourCollectionName",   
                changeStreamPreAndPostImages: { enabled: true }   
              });

// Setup the change stream with lookups and filtering
const priceMonitor = async (minimumPriceChange) => {
  try {
    const pipeline = [
      { $match: { operationType: 'update' } },
      { $match: { 'updateDescription.updatedFields.price': { $exists: true } } },
      { $project: { documentKey: 1, 'updateDescription.updatedFields.price': 1 } }
    ];
    options = { fullDocumentBeforeChange: 'required' };
    const stream = collection.watch(pipeline, options);  

    // Process each change as it occurs
    for await (const change of stream) {
      const newPrice = change.updateDescription.updatedFields.price;
      const oldPrice = change.fullDocumentBeforeChange.price;
      const priceDiff = Math.abs(newPrice - oldPrice);

      // Only process significant price changes
      if (priceDiff >= minimumPriceChange) {
        await notifyPriceSubscribers(change.documentKey._id, oldPrice, newPrice);
      }
    }
  } catch (error) {
    console.error("Change stream error:", error);
    // Implement reconnection logic here  
  }  
};
