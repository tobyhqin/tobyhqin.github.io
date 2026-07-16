import assert from 'node:assert/strict'
import test from 'node:test'
import { scrollScrubTime } from '../src/components/scrollScrub.ts'

test('maps chapter scroll to video time in either direction', () => {
  const duration = 5

  assert.equal(scrollScrubTime(0, 900, 900, duration), 0)
  assert.equal(scrollScrubTime(-450, 900, 900, duration), 2.5)
  assert.equal(scrollScrubTime(-900, 900, 900, duration), duration)
  assert.ok(
    scrollScrubTime(-225, 900, 900, duration) <
      scrollScrubTime(-675, 900, 900, duration),
  )
})

test('uses the sticky distance for long chapters and clamps the ends', () => {
  assert.equal(scrollScrubTime(100, 2700, 900, 6), 0)
  assert.equal(scrollScrubTime(-900, 2700, 900, 6), 3)
  assert.equal(scrollScrubTime(-3000, 2700, 900, 6), 6)
})
