require 'graphql'

class SayHello < GraphQL::Function
  type types.String

  def call(obj, args, ctx) 
    "Hello world!"
  end
end


QueryType = GraphQL::ObjectType.define do 
  name 'Query'
  field :hello, function: SayHello.new
end

Schema = GraphQL::Schema.define do
  query QueryType
end

puts Schema.execute('{hello}').to_h