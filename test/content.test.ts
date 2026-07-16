import assert from 'node:assert/strict'
import test from 'node:test'
import { works } from '../src/data/content.ts'

test('keeps the approved papers and NC DECA app in order', () => {
  assert.deepEqual(
    works.map(({ title }) => title),
    [
      'Universal FAFSA Mandates and the Activation of Student Aid',
      'Does automatic gratuity help or hurt servers? An examination of a casual restaurant’s POS data',
      'Stormwater microbiome modeling',
      'ICE IGSA facility expansion study',
      'NC DECA app',
    ],
  )

  assert.match(works.at(-1)?.description ?? '', /2,000\+/)
  assert.doesNotMatch(
    works.filter(({ kind }) => kind === 'project').map(({ description }) => description).join(' '),
    /\b(?:built|rebuilt|launched)\b/i,
  )
})
