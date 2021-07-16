class User < ApplicationRecord
    validates :username, presence: true
    validates :username, uniqueness: true
    has_many :orders

    def open_order_id
        order = self.orders.find_or_create_by(open: true)
        order_id = order.id
    end

end