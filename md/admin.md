# Admin Rolls

## Supper Admin

```javascript
export const isSuperAdmin = async () => {
  const session = await auth()
  const authEmail = session?.user?.email
  const rollDb = await prisma.admin.findUnique({
    where: {
      email: authEmail || '',
    },
    select: {
      role: true,
    },
  })

  if (
    authEmail !== (process.env.ADMIN_EMAIL as string) ||
    rollDb?.role !== RoleSchema.Enum.superAdmin
  ) {
    return false
  }
  return true
}
```

## Admin

```javascript
export const isAdmin = async () => {
	const session = await auth()
	const authEmail = session?.user?.email
	const rollDb = await prisma.admin.findUnique({
		where: {
			email: authEmail || '',
		},
		select: {
			role: true,
		},
	})

	if (rollDb?.role !== RoleSchema.Enum.admin && !RoleSchema.Enum.superAdmin) {
		return false
	}
	return true
}
```

## How to use it?

In the server side page before the return user this code.

- Supper Admin case

```javascript
const SuperAdmin = await isSuperAdmin()
if (!SuperAdmin) {
	return notFound()
}
```

- Admin case

```javascript
const Admin = await isAdmin()
if (!Admin) {
	return notFound()
}
```
