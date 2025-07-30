---
sidebar_position: 0
---

# Java

Java is a high-level, object-oriented programming language and computing platform developed by Sun Microsystems (now owned by Oracle) and released in 1995.

### Installation


To get started with Java development, you need to install JDK

There are many OpenJDK

e.g. Temurin  
https://adoptium.net/temurin/releases

Download installer or binary files.

After installation, set environment variable and path

```sh
export JAVA_HOME=/path/to/java_home
export PATH=$JAVA_HOME/bin:$PATH
```

Test

```
$ java -version
java version "17.0.x" 
```


Write a Test Program

Create a file named HelloWorld.java

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
```

Compile the Program


```bash
javac HelloWorld.java
```

This will create a HelloWorld.class file (compiled bytecode).

Run the Program

```
java HelloWorld
```

You should see the output:

```
Hello, Java!
```