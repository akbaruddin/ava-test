

import test from "ava";
import comArray, { data } from "./comArray.js";

test("foo", (t) => {
  t.pass();
});

test('comArray - Electronics', async t => {
  t.is(comArray(data, 'Electronics', ''), 'Electronics');
});

test('comArray - Screens', async t => {
  t.is(comArray(data, 'Screens', ''), 'Electronics.Screens');
});

test('comArray - TV', async t => {
  t.is(comArray(data, 'TV', ''), 'Electronics.Screens.TV');
});

test('comArray - LED TV', async t => {
  t.is(comArray(data, 'LED TV', ''), 'Electronics.Screens.TV.LED TV');
});

test('comArray - Hand tools', async t => {
  t.is(comArray(data, 'Hand tools', ''), 'Gardening.Tools.Hand tools');
});