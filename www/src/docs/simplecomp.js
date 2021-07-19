export default `&lt;template&gt;
  &lt;div class=&quot;HelloWorld&quot;&gt;
    HelloWorld component works!
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default class HelloWorld {
    data() {
      return {
        name: &quot;HelloWorld&quot;,
        components: {},
        template: this.template(),
        style: this.style(),
        render: this.render.bind(this),
      };
    }

    render() {
      console.log(&quot;Hello World!&quot;);
    }
  }
&lt;/script&gt;

&lt;style lang=&quot;scss&quot;&gt;
  .HelloWorld {
    color: blue;
  }
&lt;/style&gt;`;