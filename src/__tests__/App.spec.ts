import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'
import router from '../router'

describe('App', () => {
  it('renders the header and navigation tabs', async () => {
    router.push('/products')
    await router.isReady()
    const wrapper = mount(App, { global: { plugins: [router] } })

    expect(wrapper.text()).toContain('Mom-Kiosk')
    expect(wrapper.text()).toContain('Polls')
  })
})
