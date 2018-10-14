# abpnpc
abp-ng-alain-cli-extends
## 写在前面
  从ng-alain扩展abp新建模块、列表页、新建、编辑等.
  代码也是在ng-alain的基础上修改的.
  文档也是.
## 命令格式

```bash
ng g abpnpc:<command name> <name> [options]
```

> ng-alain 有自己的一套文件组织结构，当你破坏这些结构时，可能会导致下列指令产生异常。

## Module 模块

生成一个 `trade` 模块：

```bash
ng g abpnpc:module trade
```

会在 `routes/trade` 生成两个文件 `trade.module.ts`、`trade-routing.module.ts`，你无法指定不生成 `*-routing.module.ts` 因为这是 ng-alain 的任性。

模块内容包括了导入 `SharedModule` 以及一些统一性导入与导出的方式，并且你不可能破坏这些变量名（例如：`COMPONENTS`、`COMPONENTS_NOROUNT`、`routes`）。

### 增加了 `AbpModule`, `LayoutModule`.


## 业务页

目前包含的业务组件页，包括：

- `list` 列表页
- `edit` 编辑页
- `create` 新建页

在 `trade` 下生成 `list` 列表页：

```bash
ng g abpnpc:list list -m=trade
```