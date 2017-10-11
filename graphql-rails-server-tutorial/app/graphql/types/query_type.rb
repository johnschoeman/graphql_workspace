Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  # without search filter
  # field :allLinks, !types[Types::LinkType] do
  #   resolve -> (obj, args, ctx) { Link.all }
  # end

  field :allLinks, function: Resolvers::LinksSearch
  # TODO: remove me
  # field :testField, types.String do
  #   description "An example field added by the generator"
  #   resolve ->(obj, args, ctx) {
  #     "Hello World!"
  #   }
  # end
end
