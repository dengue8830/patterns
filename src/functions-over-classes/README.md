Its pretty common that people uses js classes to create services and repositories because thats kinda how OOP frameworks does. The downsides are:

- Services/Repositories are usually a group of unrelated functions. This is against of OOP, a class has to represent a cohesive group of state + behaviour
- Having those functions in the same file increase the mental overhead while surfing the code
- Those classes uses to grow exponentially because people just add utility methods in the same class. This is because using classes for this is a conceptual mistake and the limits and responsabilities are not clear
- While testing we want to mock some specific methods and using classes this is pretty hard because you have to override the instance methods

By using just functions, we can:

- Keep files small
- Mock specific functions without collateral damage
