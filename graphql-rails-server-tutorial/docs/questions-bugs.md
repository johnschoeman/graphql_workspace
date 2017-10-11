### Questions

  Why do mutation_type.rb and query_type.rb both have :allLinks?

  What is the point of the types folder?

  what does the keyword argument in a ruby class mean?

  what is Types::LinkType in the resolver doing?

  why are individual resolvers their own classes? why do we have a single LinksResolver class with many link related resolver actions?

  ----

  "In this tutorial, you’ll implement a simple pagination approach that’s called limit-offset pagination. This method would not work with Relay on the frontend since Relay requires cursor-based pagination using the concept of connections. You can read more about pagination in the GraphQL docs."

  What is the difference between limit-offset pagination and cursor-based pagination?  what works best with apollo?


  ----

  what does the option key word do within a resolver class

### Bugs

in graphiql
```
SyntaxError: Unexpected token < in JSON at position 0
```
check your server logs: verify naming of things in your resolvers