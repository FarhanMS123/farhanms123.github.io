- Install Python3
- Install Visual Studio and Desktop Development with C++
- Install NodeJS and Additional Tools include Chocolatey (do not forget remove VSBuildTools and Python3 from `.pwsh`)
- Install JDK, Maven, Gradle
- Install Winget
- Intall Oh My Posh and Clink
  - LUA: C:\Program Files (x86)\clink\oh-my-posh.lua
```lua
load(io.popen('oh-my-posh init cmd --config "C:\\dev\\montys.omp.json"'):read("*a"))()
io.popen('start /B cmd.exe /c "timeout /t 3 /nobreak && curl -L -o C:\\dev\\montys.omp.json https://github.com/FarhanMS123/farhanms123.github.io/raw/refs/heads/master_v3/shell/montys.omp.json" >NUL 2>NUL')
```