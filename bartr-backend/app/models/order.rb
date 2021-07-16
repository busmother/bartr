class Order < ApplicationRecord
    has_many :items
    has_many :products, through: :items
    belongs_to :user

    def order_total
        items = self.items.all
        prices = []
        items.each do |item|
            item
            prices << item.product.price.to_i
        end
        prices.sum
    end

end
