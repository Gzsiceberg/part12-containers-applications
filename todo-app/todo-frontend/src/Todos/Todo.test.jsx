/* @vitest-environment jsdom */
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Todo from './Todo'

describe('Todo', () => {
  it('renders a done todo and calls delete handler', () => {
    const onDelete = vi.fn()
    const onComplete = vi.fn()

    render(
      <Todo
        todo={{ text: 'ship feature', done: true }}
        onDelete={onDelete}
        onComplete={onComplete}
      />
    )

    expect(screen.getByText('ship feature')).toBeDefined()
    expect(screen.getByText('This todo is done')).toBeDefined()
    expect(screen.queryByText('Set as done')).toBeNull()

    fireEvent.click(screen.getByText('Delete'))
    expect(onDelete).toHaveBeenCalledTimes(1)
    expect(onComplete).toHaveBeenCalledTimes(0)
  })

  it('renders a not done todo and calls complete handler', () => {
    const onDelete = vi.fn()
    const onComplete = vi.fn()

    render(
      <Todo
        todo={{ text: 'write tests', done: false }}
        onDelete={onDelete}
        onComplete={onComplete}
      />
    )

    expect(screen.getByText('write tests')).toBeDefined()
    expect(screen.getByText('This todo is not done')).toBeDefined()

    fireEvent.click(screen.getByText('Set as done'))
    expect(onComplete).toHaveBeenCalledTimes(1)
    expect(onDelete).toHaveBeenCalledTimes(0)
  })
})
