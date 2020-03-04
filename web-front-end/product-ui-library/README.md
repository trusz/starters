# Product Ui Library

The product ui library architecture solves the problem of micro front-ends and
code sharing between multiple UIs and teams

## Architecture

```txt
           ┌─────────────┐
           │             │
           │   UI-Lib    │
           │             │
           └─────────────┘
                  ▲
                  │
      ┌───────────┴───────────┐
      │                       │
      │                       │
┌─────────────┐        ┌─────────────┐
│   Product   │        │   Product   │
│   UI-Lib    │        │   UI-Lib    │
└─────────────┘        └─────────────┘
       ▲                      ▲
   ┌───┴────┐             ┌───┴────┐  
   │        │             │        │  
   │        │             │        │  
┌────┐   ┌────┐        ┌────┐   ┌────┐
│ UI │   │ UI │        │ UI │   │ UI │
└────┘   └────┘        └────┘   └────┘
```

**UI-Lib** only holds cross product components and functionality, such as:

* Basic UI Components(Button, List, etc...)
* Authentication + Authorization

**Product UI-Lib** contains cross UI functionality and components, such as:

* modified UI components
* pre-configured UI components
* special use case specific components
* custom business logic
* views
* etc...

**The UIs** configure the provided views and components from the Product UI Library.
They never import anything directly from the UI Library
