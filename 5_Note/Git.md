### Git
  #### Git配置用户信息
  - 配置：用户名和邮箱，应用在每次提交代码版本时表面自己的身份
  - 命令：
    ```
    git config --global user.name "Your Name"
    git config --global user.email "email@example.com"
    ```
  - 注意：
    - 配置的用户信息，对当前用户的所有仓库有效
    - 如果要对特定仓库配置用户信息，则去掉--global参数
    - 配置的用户信息，在提交代码时会自动添加到版本信息中
  
  #### 掌握Git仓库
  - Git仓库（repository）：记录文件状态内容的地方，存储着修改的历史记录
  - 创建
    1. 把本地文件转换成Git仓库：命令 `git init`
    2. 从其他服务器上克隆Git仓库
  
  #### Git的三个区域
  - Git使用时：
    - 工作区：实际开发时操作的文件夹
    - 暂存区：保存之前的准备区域
    - 版本库：提交并保存暂存区中的内容，产生一个版本记录
  - 三个区域的关系：
    - 工作区 -`git add`-> 暂存区 -`git commit`-> 版本库
  - 命令
  ![Git的三个区域的命令](../3_框架前置(AJAX-Node.js-Webpack-Git)/4_Git/2_images/Git的三个区域的命令.png)

  #### Git 文件状态
  - Git文件2种状态：
    - 未跟踪：新文件，从未被Git管理过
    - 已跟踪：Git已经知道和管理的文件
  - 文件状态：
  ![Git文件状态](../3_框架前置(AJAX-Node.js-Webpack-Git)/4_Git/2_images/Git文件状态.png)
  - 查看文件状态：
    - 命令：`git status`
    - 结果：
      - 红色：未跟踪
      - 绿色：已跟踪
  
  #### Git暂存区使用
  - 暂存区：暂时存储，可以临时恢复代码内容，与版本库解耦
  - 查看暂存区：`git ls-files -s`
  - 暂存区 --> 覆盖 --> 工作区，命令： `git restore 目标文件` （注意：完全确认覆盖时使用）
  - 从暂存区移除：命令：`git rm --cached 目标文件`
  - Git各个区域关系图：
  ![Git各个区域关系图](../3_框架前置(AJAX-Node.js-Webpack-Git)/4_Git/2_images/Git各个区域关系图.png)
  
  #### Git版本库使用
  - 版本库：保存文件状态内容，提交并保存暂存区中的内容，产生一个版本记录
  - 查看提交历史：`git log --oneline` 和 `git reflog --oneline`
  - 回退命令：
    - `git reset --soft 版本号（其他文件未跟踪）`
    - `git reset --hard 版本号`
    - `git reset --mixed 版本号（与 git reset 等价）`

  #### 忽略文件
  - 概念：.gitignore 文件可以让 git 彻底忽略跟踪指定文件
  - 目的：让 git 仓库更小更快，避免重复无意义的文件管理
  - 例如：
    1. 系统或软件自动生成的文件
    2. 编译产生的结果文件
    3. 运行时生成的日志文件，缓存文件，临时文件等
    4. 涉密文件，密码，秘钥等文件
  - 创建：
    1. 项目根目录新建 .gitignore 文件
    2. 填入相应配置来忽略指定文件
  - 注意：如果文件已经被暂存区跟踪过，可以从暂存区移除即可
  ![Git忽略文件](../3_框架前置(AJAX-Node.js-Webpack-Git)/4_Git/2_images/Git忽略文件.png)

