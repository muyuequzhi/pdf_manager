/*
* 初始化
*   配置对象
*
* 数据驱动视图
*   页面中的表现/功能 是通过数据的形式来反馈的
*
* el
*   指定vue处理的模板边界范围
*
* data配置项
*   存储应用中所需要用到的数据，他是一个对象
*
* MIME
*
* 模板
*
* {{表达式}}
*
* 指令
*   v-for
*
* computed
*   计算属性，产生派生数据，data存放原始数据，computed存放根据原始数据计算（派生）出来的数据
*
* v-if
* v-show
*
* v-on/@
* */
const app = new Vue({
      delimiters: ['[[', ']]'],
      el: '#pdf',
      data: {
          message: 'Hello Vue!',
          people: people,
      },
      methods: {
          greet: function(name) {
              console.log('Hello from ' + name + '!')
          }
      }
    });

const app = new Vue({
    delimiters: ['[[', ']]'],
    el: '#app',
    data: {

        appName: '知识库',
        // 显示模式：缩略图、列表
        showMode: 'thumb',
        // 显示的文件类型
        showType: 'all',
        // 类型与MIME的映射关系
        },
    // 计算属性，存放派生数据
    computed: {
        // 每一个计算属性都是一个函数，函数的返回值就是这个函数对应的属性的值，计算属性使用的时候，使用的是方法对应的属性
        folderFiles() {
            return this.showType == 'all' ? this.files.filter( file => file.type == '' ) : [];
        },
        otherFiles() {
            // console.log(this.MIMEMAPS[this.showType])
            let otherFiles = this.files.filter( file => file.type != '' );
            if (this.showType == 'all') {
                return otherFiles;
            } else {
                return otherFiles.filter(file => this.MIMEMAPS[this.showType].includes(file.type));
            }
        }
    },
    // methods，存放所有vue中使用的函数
    methods: {
        changeShowMode(type) {
            this.showMode = type;
        },
        changeShowType(type) {
            this.showType = type;
        }
    }

});

// console.log(app)