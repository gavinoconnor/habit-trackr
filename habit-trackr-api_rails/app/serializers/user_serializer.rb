class UserSerializer < ActiveModel::Serializer
  has_many :habits
  attributes :id
end
