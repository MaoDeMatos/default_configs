# Don't use this in the root of your project or you'll break your dependencies
get-childItem -recurse | Where {$_.extension -eq ".js"} | rename-item -newname { $_.name -replace ".js",".jsx" }