�������
x
html-tags.js

���������� ��������map���� ����������html-tags. ���������� ������ ���� ����������� � �������������� ������������ ��������.

import { make, append, node, value, is } from 'hexlet-html-tags';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

const processedDom = map((element) => {
  if (is('h1', element)) {
    return node('h2', value(element));
  }
  return element;
}, dom3);

���������� ��������mirror, ������� �������������� ���������� �����, ��� ����� ������ ��� ����� ���� ������ ������, � �� ����� �������.

import { make, append, node, value, is } from 'hexlet-html-tags';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

// <h1>emehcs</h1>
// <p>psil a si</p>
toString(mirror(dom3));


