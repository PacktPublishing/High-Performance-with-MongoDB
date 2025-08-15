class Product
  include Mongoid::Document
  field :name, type: String
  field :price, type: Float
  field :category, type: String
  field :in_stock, type: Boolean
end

# Find all in-stock products in the "electronics" category
# priced between $100 and $500, sorted by price
results = Product.where(:category => "electronics")
                .and(:in_stock => true)
                .and(:price.gte => 100, :price.lte => 500)
                .order_by(:price => :asc)
