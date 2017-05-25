�������
?
html-tags.js
���������� � ������������� ������� extractHeaders, ������� ��������� ��� ��������� h2 �� html � ���������� ����� html, � ������� ��������� �������� �� p. ���� ��� ���� �������� ��� ��.

import { node, append, make, reduce, toString as htmlToString } from 'hexlet-html-tags';

const html1 = append(make(), node('h2', 'header1'));
const html2 = append(html1, node('h2', 'header2'));
const html3 = append(html2, node('p', 'content'));

// <p>header1</p><p>header2</p>
htmlToString(extractHeaders(html3));
���������� � ������������� ������� wordsCount, ������� ������� ��������� ����� � ������������ ���. ��� �������� ���� � ������ ������ ���� �������������� ��������������� �������� wc, ������� ��� ������������� � ������ html-tags.

import { make, append, node } from 'hexlet-html-tags';

const html1 = append(make(), node('h2', 'header1 lisp'));
const html2 = append(html1, node('p', 'content'));
const html3 = append(html2, node('h2', 'lisp header2 lisp'));
const html4 = append(html3, node('p', 'content lisp'));

wordsCount('h2', 'lisp', html4); // 3
���������
������� ���� � ������: wc(word, text), ��� word ������� �����, � text ��� �����, � ������� ������� �����.