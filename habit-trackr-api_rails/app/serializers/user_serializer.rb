class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :password_digest
  has_many :habits
end
