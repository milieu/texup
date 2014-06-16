# Setup
### Install dependencies

The following assumes a 14.04 LTS Ubuntu environment.

##### Play 2.2.2
```
    curl -o play-2.2.2.zip http://downloads.typesafe.com/play/2.2.2/play-2.2.2.zip?_ga=1.108187585.2125525425.1400865911
    unzip play-2.2.2.zip
    export PATH=./play-2.2.2:$PATH
   
    # Test Play installation works
    play
   
    # If Java JDK not installed
    apt-get install openjdk-7-jdk
```

##### LaTeX dependencies
```
    # LaTeX
    apt-get install texlive
  
    # tlmgr
    git clone https://github.com/scottkosty/install-tl-ubuntu.git
    ./install-tl-ubuntu/install-tl-ubuntu
  
    # Tex packages
    # xzdec needed for the standalone package
    apt-get install xzdec
    tlmgr install standalone
    tlmgr install varwidth
  
```

##### ImageMagick
```
    apt-get install imagemagick 
```

### Run!
```
    git clone https://github.com/milieu/texup.git
    cd texup
    play run
```
