class UserSerializer
    include JSONAPI::Serializer
    attributes :id, :username, :open_order_id
end