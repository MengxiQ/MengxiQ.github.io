<template>
    <div>
        <el-container style="height: calc(100vh - 60px);">
            <el-aside width="200px">
                <el-menu style="height: 100%;" mode="vertical" default-active="0-0" :default-openeds="['0']">
                    <el-sub-menu v-for="(item1, index1) in page_list" :index="String(index1)">
                        <template #title>
                            <el-icon>
                                <Notebook />
                            </el-icon>
                            <span>{{ item1.typeName }}</span>
                        </template>
                        <template v-for="(item2, index2) in item1.children">
                            <el-menu-item @click="clickPageListItem(item2)" :index="index1 + '-' + index2">{{ item2.name
                                }}</el-menu-item>
                        </template>
                    </el-sub-menu>
                </el-menu>
            </el-aside>
            <el-main style="display: flex;flex-direction: column;">
                <div class="mini-app-tools-cover">
                    <el-button @click="handleEdit" type="primary" size="small">
                        <el-icon size="small">
                            <Edit />
                        </el-icon>
                    </el-button>
                </div>
                <div class="mini-app-container">
                    <iframe width="100%" height="100%" :src="active_page.url" frameborder="0"></iframe>
                </div>
            </el-main>
        </el-container>
        <ClientOnly>
            <el-dialog v-model="dialogTableVisible" draggable :title="active_page.name" :modal="true" fullscreen>
                <div v-loading="code_editor.loading" ref="code-editor" class="code-editor-container">
                    <VMonacoEditor
                     v-model:model-value="code_editor.content"
                     language="html"
                     ></VMonacoEditor></div>
            </el-dialog>
        </ClientOnly>

    </div>
</template>
<script lang="ts" setup>
import {
    Notebook, Edit
} from '@element-plus/icons-vue'

const code_editor = reactive({
    loading: false,
    content: '',
});
const page_list = reactive([
    {
        typeName: '饼图',
        children: [
            {
                name: '轮播饼图指示器',
                url: './demos/carousel_pie.html'
            },
            {
                name: 'demo2',
                url: './demos/demo2.html'
            }
        ]
    }

]);
const active_page = ref(page_list[0].children[0]);

const clickPageListItem = (item: { name: string; url: string; }) => {
    active_page.value = item;
}

const dialogTableVisible = ref(false);


function handleEdit() {
    dialogTableVisible.value = true;
    code_editor.loading = true;
    nextTick(async () => {
        const { data} = await useFetch(active_page.value.url);
        code_editor.content = String(data.value);
        code_editor.loading = false;
    })

}


</script>

<style>
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
} */


.mini-app-container {
    border: 1px solid var(--el-border-color);
    border-radius: 2px;
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 400px;
    min-height: 400px;
    position: relative;
}

.mini-app-tools-cover {
    margin-bottom: 10px;
}

.code-editor-container {
    width: 100%;
    height: calc(100vh - 72px);
}
</style>