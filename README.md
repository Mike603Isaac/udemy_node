This is my readme file
** Under this section 22 deals with introductory path of Backend development **
-
-
-
-

** Section 23 talks of the Node.js which is a JavaScript REPL which means "READ EVALUATE PRINT LOOP" that liberties the javascript from been restricted to the browser but can be used to programme out the browser like any other programming language **

LESSION 193: What is Node?

Definition of Node: this is a asynchronous javascript event driven runtime, node.js is build to design scalable network applications. (According to node.js)
                  NOTES
* Node uses v8 Engine (Written in c++ powered the chrome browser and it's fast)
- asychronous means Not sequential
- eventdriven perform it when event happens

* The key reason for node is because:
- It allows us to build our "APPLICATION"
-  JS FullStack 
- Scalable that is fast, effective, high performance    with lesser code.
- Non blocking
- Large Ecosystem: communities that uses node.js ln, twitter, NASA, NetFlix
- Most of the code that are committed in github node.js is kin

LESSON 194 & 195: How to Install Node


LESSON 196: Using Node.js
MAJOR USES OF NODE
- To run a script:
     * simply use "node fileName" command
  - we can also use the node REPL 
     * by using the "node"command  
  - .help command for help
  - ".exit" command to exit from REPL
  - To exit get out of anything unknown in the command line is to use "CTRL C" command


LESSON 197: How to use Node Native Module (NNM)

Leveraging on Node
Native Node Module are simply our starting tool set to enable us build our applications especially on the server side
e.g file access (reading and writing to local file system to local computer or to the web App to will be to server), network
    * The File System is the native node module that enable us to access (read or write) to the local storage
        - To start using we can either require the bits of code (commonjs i.e CJS) or import code from the system module(ECMA script or ESM)
  There are different native modules in node.js documentation. e.g PATH, FILE SYSTEM, HTTP e.t.c
for File System we can w ==> fs.writeFile(file, data[, options], callback) and r ==> fs.readFile(path[, options], callback)

The callBack is { (err) => if(err) throw err;
                      console.log("File Saved!")}

Note: Node has some features built into it to create app


LESSON 198: Node Package Manager (NPM) How to use NPM in Your projects
This is simply a place that contains collection of modules and stores people have built. Which is created by the github organsition. This is a more sophisticated than NNM

Note: 
- NPM is a community tool library for everyone to share and use
- It is open source
- we can search to find the package that is needed
- It comes prebundled with node.


