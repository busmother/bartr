class ItemSerializer
    include JSONAPI::Serializer
    attributes :product_id, :product
end