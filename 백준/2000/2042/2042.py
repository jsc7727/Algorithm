# https://www.acmicpc.net/problem/2042

import sys
input = sys.stdin.readline

N, M, K = map(int, input().strip().split(' '))

arr = []
segmentTree = [0]*(N * 4)
for i in range(N):
    arr.append(int(input()))


def makeSegmentTree(node, start, end):
    if (start == end):
        segmentTree[node] = arr[start]
        return segmentTree[node]
    middle = (start + end) // 2
    leftResult = makeSegmentTree(node * 2, start, middle)
    rightResult = makeSegmentTree(node * 2 + 1, middle + 1, end)
    segmentTree[node] = leftResult + rightResult
    return segmentTree[node]


def segmentTreeSum(node, start, end, left, right):
    if left > end or right < start:
        return 0
    if left <= start and right >= end:
        return segmentTree[node]
    middle = (start + end) // 2
    LeftSum = segmentTreeSum(node * 2, start, middle, left, right)
    rightSum = segmentTreeSum(node * 2 + 1, middle + 1, end, left, right)
    return LeftSum + rightSum


def updateSegmentNode(node, start, end, index, diff):
    if (index < start or index > end):
        return
    segmentTree[node] += diff
    if (start != end):
        middle = (start + end) // 2
        updateSegmentNode(node * 2, start, middle, index, diff)
        updateSegmentNode(node * 2 + 1, middle + 1, end, index, diff)


makeSegmentTree(1, 0, N - 1)
for i in range(M+K):
    a, b, c = map(int, input().strip().split(' '))
    if (a == 1):
        diff = c - arr[b - 1]
        arr[b - 1] = c
        updateSegmentNode(1, 0, N - 1, b - 1, diff)
    else:
        print(segmentTreeSum(1, 0, N - 1, b - 1, c - 1))
