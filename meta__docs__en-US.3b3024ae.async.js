"use strict";(self.webpackChunkFEX_AI=self.webpackChunkFEX_AI||[]).push([[430],{44953:function(t,n,e){e.r(n),e.d(n,{demos:function(){return o}});var d=e(67294),a=e(65968),o={}},91720:function(t,n,e){e.r(n),e.d(n,{demos:function(){return o}});var d=e(67294),a=e(23271),o={}},82908:function(t,n,e){e.r(n),e.d(n,{demos:function(){return o}});var d=e(67294),a=e(18810),o={}},92999:function(t,n,e){e.r(n),e.d(n,{texts:function(){return a}});var d=e(65968);const a=[{value:"dumi-theme-antd-style",paraId:0},{value:" For better customizability, some special fields are added, and they are placed in the ",paraId:0},{value:"themeConfig",paraId:0},{value:" field of the ",paraId:0},{value:"dumi",paraId:0},{value:" theme configuration item. The specific configuration fields are as follows:",paraId:0},{value:"type: ",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"default: ",paraId:1,tocIndex:1},{value:"null",paraId:1,tocIndex:1},{value:"The navigation bar Github icon link, if this field is not configured, it will not be displayed.",paraId:2,tocIndex:1},{value:"type: ",paraId:3,tocIndex:2},{value:"string | Record<string, string>",paraId:3,tocIndex:2},{value:"default: ",paraId:3,tocIndex:2},{value:"null",paraId:3,tocIndex:2},{value:"\u914D\u7F6E\u9996\u9875\u9996\u5C4F\u533A\u57DF\u7684\u7B80\u4ECB\u6587\u5B57\u3002",paraId:4,tocIndex:2},{value:"type: ",paraId:5,tocIndex:3},{value:"IAction[] | Record<string, IAction[]>",paraId:5,tocIndex:3},{value:"default: ",paraId:5,tocIndex:3},{value:"null",paraId:5,tocIndex:3},{value:`interface IAction {
  /** \u6309\u94AE\u6587\u5B57\u63CF\u8FF0 */
  text: string;
  /** \u6309\u94AE\u94FE\u63A5 */
  link: string;
}

export default defineConfig({
  themeConfig: {
    // actions: [{text: '\u5F00\u59CB\u4F7F\u7528', link: '/guide/introduce'}]

    actions: {
      "zh-CN": [{ text: "\u5F00\u59CB\u4F7F\u7528", link: "/guide/introduce" }],
      "en-US": [{ text: "Start", link: "/guide/introduce-en" }],
    },
  },
});
`,paraId:6,tocIndex:3},{value:"\u914D\u7F6E\u9996\u9875\u9996\u5C4F\u533A\u57DF\u7684\u64CD\u4F5C\u6309\u94AE\u3002",paraId:7,tocIndex:3},{value:"type: ",paraId:8,tocIndex:4},{value:"IFeature[] | Record<string, IFeature[]>",paraId:8,tocIndex:4},{value:"default: ",paraId:8,tocIndex:4},{value:"null",paraId:8,tocIndex:4},{value:`export default defineConfig({
  themeConfig: {
    // \u5355\u8BED\u8A00\u65F6\u914D\u7F6E\u6570\u7EC4\u5373\u53EF
    // features: [{ title: '\u5F00\u7BB1\u5373\u7528'}, { description: '\u63A5\u5165\u7B80\u5355\uFF0C\u5B89\u88C5\u5373\u4F7F\u7528\uFF0C\u5168\u9762\u878D\u5165 Ant Design 5.0 \u98CE\u683C\u3002'}]
    // \u591A\u8BED\u8A00\u65F6\u914D\u7F6E\u5BF9\u8C61\uFF0Ckey \u4E3A\u8BED\u8A00\u540D
    features: {
      "zh-CN": [
        { title: "\u5F00\u7BB1\u5373\u7528" },
        { description: "\u63A5\u5165\u7B80\u5355\uFF0C\u5B89\u88C5\u5373\u4F7F\u7528\uFF0C\u5168\u9762\u878D\u5165 Ant Design 5.0 \u98CE\u683C\u3002" },
      ],
      "en-US": [
        { title: "Simple Use" },
        {
          description:
            "Simple access, installation and use, fully integrated into Ant Design 5.0 style.",
        },
      ],
    },
  },
});
`,paraId:9,tocIndex:4},{value:"\u8BE5\u914D\u7F6E\u5E95\u5C42\u4F7F\u7528\u672C\u4E3B\u9898\u5305\u7684 Feature \u7EC4\u4EF6\uFF0C\u8BE6\u89C1 ",paraId:10,tocIndex:4},{value:"Features",paraId:11,tocIndex:4},{value:" \u6587\u6863\u3002",paraId:10,tocIndex:4},{value:"\u642D\u914D\u7EC4\u4EF6\u6587\u6863\u4E2D\u7684 atomId \u5B57\u6BB5",paraId:12,tocIndex:6},{value:"type: ",paraId:13,tocIndex:6},{value:"ApiHeaderConfig | false",paraId:13,tocIndex:6},{value:"default: ",paraId:13,tocIndex:6},{value:"undefined",paraId:13,tocIndex:6},{value:`interface ApiHeaderConfig {
  pkg: string;
  match?: string[];
  sourceUrl?: string | false;
  docUrl?: string | false;
}

export default defineConfig({
  themeConfig: {
    apiHeader: {
      // \u7EC4\u4EF6\u5E93\u5305\u540D\uFF0C\u53EF\u4EE5\u4ECE package.json \u4E2D\u5F15\u5165\u540D\u79F0
      pkg: "dumi-theme-antd-style",
      // \u5339\u914D\u8DEF\u7531\uFF0C\u9ED8\u8BA4\u4E3A /api \u6216 /components
      match: ["/api", "/components"],
      // github \u4F1A\u5339\u914D themeConfig.github \u5B57\u6BB5
      sourceUrl: \`{github}/tree/master/src/components/{atomId}/index.tsx\`,
      docUrl: \`{github}/tree/master/example/docs/components/{atomId}.{locale}.md\`,
    },
  },
});
`,paraId:14,tocIndex:6},{value:"sourceUrl \u548C docUrl \u53EF\u4EE5\u5C1D\u8BD5\u5339\u914D\u7684\u52A8\u6001\u5B57\u6BB5\u6709\uFF1A",paraId:15,tocIndex:6},{value:"github",paraId:16,tocIndex:6},{value:": \u5728 themeConfig \u4E2D\u914D\u7F6E\u7684 github \u5B57\u6BB5\uFF1B",paraId:16,tocIndex:6},{value:"atomId",paraId:16,tocIndex:6},{value:": \u5728 markdown \u6587\u4EF6\u4E2D\u6807\u8BB0\u7684 atomId \uFF1B",paraId:16,tocIndex:6},{value:"title",paraId:16,tocIndex:6},{value:": \u5728 markdown \u6587\u4EF6\u4E2D\u6807\u8BB0\u7684 title \u5B57\u6BB5 \uFF1B",paraId:16,tocIndex:6}]},70757:function(t,n,e){e.r(n),e.d(n,{texts:function(){return a}});var d=e(23271);const a=[{value:"In the development process of ",paraId:0,tocIndex:0},{value:"Ant Design Style",paraId:0,tocIndex:0},{value:", in order to test and validate the capabilities of custom themes, dynamic theme algorithms, etc., many stylized styles were tried on the basis of antd basic components, such as gradients, frosted glass blurs, etc. As many people expressed their love for this design, it was extracted into a separate ",paraId:0,tocIndex:0},{value:"dumi2",paraId:0,tocIndex:0},{value:" theme package for reuse.",paraId:0,tocIndex:0},{value:"If you encounter any problems during use or have suggestions for improvement, please feel free to provide feedback on ",paraId:1,tocIndex:2},{value:"GitHub Issues",paraId:1,tocIndex:2},{value:".",paraId:1,tocIndex:2}]},93698:function(t,n,e){e.r(n),e.d(n,{texts:function(){return a}});var d=e(18810);const a=[]}}]);
