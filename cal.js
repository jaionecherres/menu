class cal{
    sumaDivisores(num){
        let acu=0,nu=1

        while(nu<num){
            if (num % nu == 0){
                acu=acu+nu
            }
          nu=nu+1
        }
        if(acu==num){
          acu=num
        }else{
          acu=0
        }
      return acu

     }
    sumarperfecto(){
      let serie=[6,5,25,24,28]
      let acud=0,i=0,suma=0
        for(i=0;i<serie.length;i++){
          acud=this.sumaDivisores(serie[i])
          console.log(acud)
          suma=suma+acud
        }
       document.getElementById("resp").textContent=`La suma total de los numeros perfectos es: ${suma}`
     }
     
     isPrimo(num){
        let divisor=2, valor=0
        if (num%divisor!==0){
            valor=num
        }
        return valor
     }
     
     Numeroprim(){
        let serie=[6,5,25,7,28] 
        let i=0,j=0,primos=0,arr=[],cont=0
        for(i;i<serie.length;i++){
         primos=this.isPrimo(serie[i]) 
         if(primos==serie[i]){
           cont=cont+1
           console.log(cont)
         }
         for(j;j<cont;j++){
           arr[j]=primos
        }
       }
        document.getElementById("resp").textContent= `${arr} son primos`
    }
    
    isex(b,e){
        let cont=1,mult=0
        mult=b
        while(cont<e){
          mult=mult*b
          cont=cont+1
        }
        return mult
    }
    exponente(){
        let base=parseInt(document.getElementById("num1").value)
        let ex=parseInt(document.getElementById("num2").value)
        let totalex=this.isex(base,ex)
        document.getElementById("resp").textContent=`${totalex}`
    }
    seriexpo(){
        let serie=[4,3,2,5]
        let exponen=0,i=0,j=0,arr=[],estotal=0
        for(i;i<serie.length;i++){
          exponen=serie[i]
          estotal=this.isex(serie[i],exponen)
          console.log(estotal)
          arr[i]=estotal
        }
        
        document.getElementById("resp").textContent=`${arr}`
    }
    tablamul(){
        let mult=0,arr=[],i=1
        let nu=parseInt(document.getElementById("num1").value)
        let nu2=parseInt(document.getElementById("num2").value)
        document.getElementById("resp").textContent=`${num1}`
        for(i;i<=nu2;i++){
            mult=i*nu
            arr[i]= `${nu}*${i}=${mult}\n`
        }
      document.getElementById("resp").textContent=`${arr}`
     }
     
     divisor(num,valin){
        let vallor=0
        if (num % valin == 0){
          vallor=valin
        }
      return vallor
      }
    
     divisorinicial(){
  
        let nu=parseInt(document.getElementById("num1").value)
        let nu2=parseInt(document.getElementById("num2").value)
        let cont=0,j=0
        let arr=[]
        for(nu2;nu2<nu;nu2=nu2+1){
          let div=this.divisor(nu,nu2)
          if(nu2==div){
            
            cont=cont+1
          }
          for(j;j<cont;j++){
            arr[j]=div
          }
        }
        document.getElementById("resp").textContent=`${arr}`
    }

    sumdivisor(){
        let nu=parseInt(document.getElementById("num1").value)
        let nu2=parseInt(document.getElementById("num2").value)
        let cont=0,j=0,snu=0,suma
        let arr=[]
        for(nu2;nu2<nu;nu2=nu2+1){
          let div=this.divisor(nu,nu2)
          if(nu2==div){
            
            cont=cont+1
          }
          for(j;j<cont;j++){
            snu=snu+div
            arr[j]= div
          }
        }
        document.getElementById("resp").textContent=`${arr} la suma es ${snu}`
    }
    arreglo(cade,lon,valor){
        if(valor==1){
          let arr=[],i=0,j
        for(i;i<lon;i=i+1){
        arr.push(parseInt(cade[i]))
        }
        return arr 
        }else{
          if(valor==2){
            let arr=[],i=0,suma=0,j
            for(i;i<lon;i=i+1){
            arr.push(parseInt(cade[i]))
            j=parseInt(cade[i])
            suma=suma+j
            }
            return suma
    
          }else{
            if(valor==3){
              let arr=[],i=0
              for(i;i<lon;i=i+1){
               if(cade[i]%2==0){
               arr.push(parseInt(cade[i]))
               }
              }
             return arr
            }
          }
        }
       }
    
    retornararr(){
        let cadena=document.getElementById("num1").value
        const x=1
        console.log(cadena)
        let long=cadena.length
        console.log(long)
        let arr=this.arreglo(cadena,long,x)
        document.getElementById("resp").textContent=`[${arr}]`
    }
    resumaarr(){
        let cadena=document.getElementById("num1").value
        const x=2
        console.log(cadena)
        let long=cadena.length
        console.log(long)
        let suma=this.arreglo(cadena,long,x)
        document.getElementById("resp").textContent=` la suma es [${suma}]`
      
    }
    arrpar(){
        let cadena=document.getElementById("num1").value
        const x=3
        console.log(cadena)
        let long=cadena.length
        console.log(long)
        let par=this.arreglo(cadena,long,x)
        document.getElementById("resp").textContent=` los numeros pares son: [${par}]`
      
    }
    primernum(){
        let cadena=document.getElementById("num1").value
        let pnum=parseInt(cadena[0])
        document.getElementById("resp").textContent=` el primer numeros es: [${pnum}]`
      
    }
    ultimonum(){
        let cadena=document.getElementById("num1").value
        let long=cadena.length
        let pnum=parseInt(cadena[long-1])
        document.getElementById("resp").textContent=` el ultimo numeros es: [${pnum}]`
    }
    contar(num){
        let cont=1,multi=1
        while(cont<=num){
          multi=multi*cont
          cont=cont+1
        }
        return multi
    }
    factorial(){
        let num=parseInt(document.getElementById("num1").value)
        let fac=this.contar(num)
        document.getElementById("resp").textContent=`El factorial de ${num} es ${fac}`
      
    }
    numerosfac(){
        let num=document.getElementById("num1").value
        let long=num.length
        let i=0
        let newarr=[]
        let x=1
        let arr=this.arreglo(num,long,x)
        for(i;i<long;i=i+1){
          newarr[i]=this.contar(arr[i])
        }
        document.getElementById("resp").textContent=`El arreglo [${arr}]sus factoriales son [${newarr}]`
    }
    arreglvalorini(){
        let vnic=parseInt(document.getElementById("num1").value)
        let vfin=parseInt(document.getElementById("num2").value)
        let newarr=[]
        for(vnic;vnic<vfin;vnic=vnic+1){
        newarr.push(vnic)
        }
        document.getElementById("resp").textContent=`El arreglo es [${newarr}]`
       }
}
let calc = new cal()