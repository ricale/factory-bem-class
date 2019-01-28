import assert from 'assert';
import {factoryBemClass} from './index.js';

const b = 'block';
const e = 'element';
const m = ['modifier1', 'modifier2'];

const test = (should, expected) =>
  it(`should return ${expected}`, () =>
    assert.equal(should, expected)
  );

describe('factory-bem-class', function () {
  describe('without parameter', function () {
    const cn = factoryBemClass(b);

    test(cn(), `${b}`);
  });
  describe('(string, string or stringArray)', function () {
    const cn = factoryBemClass(b);

    test(cn(e),          `${b}__${e}`);
    test(cn(e, m[0]),    `${b}__${e} ${b}__${e}--${m[0]}`);
    test(cn(e, m),       `${b}__${e} ${b}__${e}--${m[0]} ${b}__${e}--${m[1]}`);
    test(cn(null, m[0]), `${b} ${b}--${m[0]}`);
    test(cn(null, m),    `${b} ${b}--${m[0]} ${b}--${m[1]}`);
  });

  describe('({el: string, mods: string or stringArray})', function () {
    const cn = factoryBemClass(b);

    test(cn({el: e}),             `${b}__${e}`);
    test(cn({el: e, mods: m[0]}), `${b}__${e} ${b}__${e}--${m[0]}`);
    test(cn({el: e, mods: m}),    `${b}__${e} ${b}__${e}--${m[0]} ${b}__${e}--${m[1]}`);
    test(cn({mods: m[0]}),        `${b} ${b}--${m[0]}`);
    test(cn({mods: m}),           `${b} ${b}--${m[0]} ${b}--${m[1]}`);
  });

  describe('(string, {modName: boolean})', function () {
    const cn = factoryBemClass(b);

    test(cn(null, {[m[0]]: true}),                `${b} ${b}--${m[0]}`);
    test(cn(null, {[m[0]]: true, [m[1]]: false}), `${b} ${b}--${m[0]}`);
    test(cn(null, {[m[0]]: true, [m[1]]: true}),  `${b} ${b}--${m[0]} ${b}--${m[1]}`);
    test(cn(e, {[m[0]]: true}),                   `${b}__${e} ${b}__${e}--${m[0]}`);
    test(cn(e, {[m[0]]: true, [m[1]]: false}),    `${b}__${e} ${b}__${e}--${m[0]}`);
    test(cn(e, {[m[0]]: true, [m[1]]: true}),     `${b}__${e} ${b}__${e}--${m[0]} ${b}__${e}--${m[1]}`);
  });

  describe('({el: string, mods: {modName: boolean}})', function () {
    const cn = factoryBemClass(b);

    test(cn({mods: {[m[0]]: true}}),                       `${b} ${b}--${m[0]}`);
    test(cn({mods: {[m[0]]: true, [m[1]]: false}}),        `${b} ${b}--${m[0]}`);
    test(cn({mods: {[m[0]]: true, [m[1]]: true}}),         `${b} ${b}--${m[0]} ${b}--${m[1]}`);
    test(cn({el: e, mods: {[m[0]]: true}}),                `${b}__${e} ${b}__${e}--${m[0]}`);
    test(cn({el: e, mods: {[m[0]]: true, [m[1]]: false}}), `${b}__${e} ${b}__${e}--${m[0]}`);
    test(cn({el: e, mods: {[m[0]]: true, [m[1]]: true}}),  `${b}__${e} ${b}__${e}--${m[0]} ${b}__${e}--${m[1]}`);
  });
});
