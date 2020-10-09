<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <a-select mode="tags" style="width: 100%" placeholder="请输入包含关键词回车确认" @change="handleChange" v-model="selectedVals" labelInValue :options="selectedArr">

    </a-select>
    <div class="selectWrap">
        <span :class="['selectedItem', i === curSelectedItem ? 'selected' : '']" v-for="(item, i) in tpl" :key="i" @click="handleSelected(i)"> {{ item.l }} </span>
        <span class="addBtn" @click="handleAdd">添加</span>
    </div>
    <div style="width: 120px; margin-top: 20px;">
        <md-button @click="basicDialog.open = true">基本</md-button>
    </div>
    <md-dialog title="窗口标题" :closable="true" v-model="basicDialog.open" :btns="basicDialog.btns">
        人生的刺，就在这里，留恋着不肯快走的，偏是你所不留恋的东西。
    </md-dialog>
</div>
</template>

<script>
import {
    Dialog,
    Button,
    Toast
} from 'mand-mobile'
export default {
    name: 'Helloworld',
    props: {
        msg: String
    },
    components: {
        [Dialog.name]: Dialog,
        [Button.name]: Button,
    },
    data() {
        return {
            tpl: [{
                    v: '&',
                    l: '且'
                }, {
                    v: '||',
                    l: '或'
                }, {
                    v: '(',
                    l: '('
                }, {
                    v: ')',
                    l: ')'
                }, {
                    v: '>',
                    l: '大于'
                }, {
                    v: '<',
                    l: '小于'
                },

            ],
            selectedVals: [],
            selectedArr: [],
            curSelectedItem: -1,
            basicDialog: {
                open: false,
                btns: [{
                    text: '确认操作',
                    handler: this.onBasicConfirm,
                }, ],
            }
        }
    },
    methods: {
        handleChange(v) {
            console.log(`selected ${v}`);
        },
        handleSelected(index) {
            this.curSelectedItem = index;
            console.log(index);
        },
        handleAdd() {
            if (this.curSelectedItem > -1) {
                let curSelectedVal = this.tpl[this.curSelectedItem],
                    {
                        l,
                        v
                    } = curSelectedVal,
                    selectedArrLen = this.selectedArr.length,
                    selectedValsLen = this.selectedVals.length;
                this.selectedVals.push({
                    label: l,
                    value: v,
                    key: selectedValsLen
                })
                this.selectedArr.push({
                    label: l,
                    value: v,
                    key: selectedArrLen
                })
                this.curSelectedItem = -1
            }
            console.log(this.selectedArr)
        },
        onBasicConfirm() {
            Toast({
                content: '你点击了确认',
            })
            this.basicDialog.open = false
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.hello {
    width: 480px;
    margin: 0 auto;
}

.selectWrap {
    display: flex;
    margin-top: 16px;
}

.selectedItem,
.addBtn {
    display: inline-block;
    width: 4.2em;
    text-align: center;
    margin-right: 12px;
    padding: 2px 6px;
    border: 1px solid #ccc;
    border-radius: 2px;
    cursor: pointer;
}

.selectedItem:hover {
    border-color: #06c;
}

.selected,
.addBtn {
    color: #fff;
    background-color: #06c;
}
</style>
