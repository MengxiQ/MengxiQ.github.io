window.onload = function () {
    const { createApp, ref, reactive } = Vue

    createApp({
        setup() {
            const page_list = reactive([
                {
                    name: 'demo1',
                    url: './pages/demo1.html'
                },
                {
                    name: 'demo2',
                    url: './pages/demo2.html'
                }
            ]);
            const active_page = ref(page_list[0]);

            const clickPageListItem = (item) => {
                active_page.value = item;
            }

            return {
                clickPageListItem,
                page_list,
                active_page,
            }
        }
    }).mount('#app')

}