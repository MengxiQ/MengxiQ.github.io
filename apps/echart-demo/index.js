window.onload = function () {
    const { createApp, ref, reactive, nextTick } = Vue

    const app = createApp({
        setup() {
            const page_list = reactive([
                {
                    typeName: '饼图',
                    children: [
                        {
                            name: '轮播饼图指示器',
                            url: './pages/carousel_pie.html'
                        },
                        {
                            name: 'demo2',
                            url: './pages/demo2.html'
                        }
                    ]
                }

            ]);
            const active_page = ref(page_list[0].children[0]);

            const clickPageListItem = (item) => {
                active_page.value = item;
            }

            const dialogTableVisible = ref(false);


            function handleEdit() {
                dialogTableVisible.value = true;

                nextTick(() => {
                    require.config({ paths: { vs: './libs/monaco-editor-0.50.0/package/min/vs' } });
                    require(['vs/editor/editor.main'], function () {
                        fetch(active_page.value.url)
                            .then((response) => response.text())
                            .then(data => {
                                var editor = monaco.editor.create(document.getElementById('code-editor'), {
                                    value: data,
                                    language: 'html',
                                    theme:'vs-dark'
                                });
                            })
                            ;

                    });
                })

            }


            return {
                clickPageListItem,
                page_list,
                active_page,
                dialogTableVisible,
                handleEdit
            }
        }
    });
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
    app.use(ElementPlus);

    app.mount("#app");


}