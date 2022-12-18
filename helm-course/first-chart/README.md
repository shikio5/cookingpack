Learned some new commands

create new helm template:
`helm create {template name}`

getting configmap:
`kubectl get cm`

check your template and changes:
`helm template {name of your chart e.g.: first-chart} .`

getting pods: 
`kubectl get pods -A`

getting secrets:
`kubectl get secrets`

getting secrets from secret yaml file:
`kubectl describe secret {metada name of your secret under file secret.yaml e.g.: first-secret}`

upgrade helm chart:
`helm upgrade {chart name e.g.: first-chart} .`

getting helm history:
`helm history {chart name e.g.: first-chart} [version number e.g.: 2]`

rolling back helm chart:
`helm rollback first-chart`

you can set a version of your helm chart:
go to /templates, best practice would be to modify the configmap.yaml, add a dash and {{}}
```yaml
metadata:
  name: first-chart-configmap-{{.Chart.Version}}
```