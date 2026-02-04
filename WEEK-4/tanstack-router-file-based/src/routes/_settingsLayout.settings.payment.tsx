import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_settingsLayout/settings/payment')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_settingLayout/settings/about"!</div>
}
