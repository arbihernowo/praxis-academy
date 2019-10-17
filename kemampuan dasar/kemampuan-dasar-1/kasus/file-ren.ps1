tree /f D:\praxis-academy 
Write-Host "";
if (tree /f D:\praxis-academy *.java){
    "Ada file Java pada direktori D:\praxis-academy"
    $search = Read-Host -Prompt 'Masukkan File yang ingin dicari:' 
    $file = Get-ChildItem -Path D:\praxis-academy\kemampuan-dasar-1 -Recurse -Include "$($search).java" | Select-Object -First 1
    if ($file) {
    $choice = Read-Host -Prompt "$($search).java ada, mau ganti nama? (y/t)" 
    if ( $choice -eq "y") {
         $NewName = Read-Host -Prompt 'Silakan masukkan nama baru:' 
         Rename-Item -Path $file -NewName $NewName
         Write-Host "Nama file berhasil diganti!";
         }
    else {
    Write-Host "Nama file tidak diganti"
    }
         
      }
    else {
    Write-Host "File Tidak ada"
    }
}

Write-Host "";