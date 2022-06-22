class Photocard {
    constructor(dimensao,imagemFrente,imagemTras,statusDoPhotocard){
        this.dimensao = dimensao
        this.imagemFrente = imagemFrente
        this.imagemTras = imagemTras
        this.statusDoPhotocard = statusDoPhotocard
        
    }

    imprimir(cliente, merch){
        if (this.statusDoPhotocard = "Pronto para impressão"){
            
            console.log(`${cliente}, aqui está seu ${merch}🖨️`)
        }
    }
    
}


const photocardDaMayara = new Photocard("10x8", "TaeHyung", "BTS logo", "Pronto para impressão");

photocardDaMayara.imprimir("Mayara", "Photocard")

console.log(photocardDaMayara.imprimir)
