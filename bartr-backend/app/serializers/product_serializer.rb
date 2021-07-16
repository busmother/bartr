class ProductSerializer
    include JSONAPI::Serializer
    attributes :name, :description, :image, :price
end