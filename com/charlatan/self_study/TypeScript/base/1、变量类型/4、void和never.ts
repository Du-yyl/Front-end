/**
 * Time:2022/3/30 15:55 42
 * Name:4、void和never.ts
 * Path:base/1、变量类型
 * ProjectName:TypeScript
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */


/*
void 【函数没有返回值，可以使用 void 可以返回 空 | undefined | null 都可以】
 */
function sum():void {
  // return
  // return null
  return undefined
}

/*
never 表示永远表示永远没有返回结果【这个什么都不能返回，空也算返回的，所以，这个一般用于指定报错的】
 */
function sam():never {
  throw new Error('错误')
}
