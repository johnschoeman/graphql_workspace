### Questions

  Why do mutation_type.rb and query_type.rb both have :allLinks?

  What is the point of the types folder?

  what does the keyword argument in a ruby class mean?

  what is Types::LinkType in the resolver doing?

  why are individual resolvers their own classes? why do we have a single LinksResolver class with many link related resolver actions?

### Bugs

in graphiql
```
SyntaxError: Unexpected token < in JSON at position 0
```
check your server logs: verify naming of things in your resolvers