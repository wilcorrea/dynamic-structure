export const form = route => {
  const schemas = ($this) => [
    {
      component: 'app-input',
      name: 'email',
      label: 'E-mail',
      type: 'email',
      default: 'wilcorrea@gmail.com'
    },
    {
      component: 'app-input',
      name: 'password',
      label: 'Senha',
      type: 'password'
    },
    {
      component: 'app-input-checkbox',
      name: 'check',
      label: 'Lembrar'
    }
  ]
  /*
  */
  const actions = ($this) => [
    {
      label: 'Salvar',
      className: 'btn btn-primary',
      click: () => $this.save()
    }
  ]
  return {
    schemas: schemas,
    actions: actions
  }
}
