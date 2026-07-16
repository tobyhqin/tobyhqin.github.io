import assert from 'node:assert/strict'
import test from 'node:test'
import { scrollScrubTime, smoothScrubTime } from '../src/components/scrollScrub.ts'

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

test('smooths seek jumps consistently across refresh rates', () => {
  const firstFrame = smoothScrubTime(0, 5, 16)
  assert.ok(firstFrame > 0 && firstFrame < 5)
  assert.ok(smoothScrubTime(5, 0, 16) > 0 && smoothScrubTime(5, 0, 16) < 5)

  let at60Hz = 0
  for (let frame = 0; frame < 10; frame += 1) at60Hz = smoothScrubTime(at60Hz, 5, 16)

  let at30Hz = 0
  for (let frame = 0; frame < 5; frame += 1) at30Hz = smoothScrubTime(at30Hz, 5, 32)

  assert.ok(Math.abs(at60Hz - at30Hz) < 1e-10)
})
