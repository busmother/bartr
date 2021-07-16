class OrderSerializer
    include JSONAPI::Serializer
    attributes :user_id, :open, :order_total, :recipient, :street_address, :city, :state, :zip_code, :updated_at, :products
end