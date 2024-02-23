var UpTextSize = document.querySelector(".UpTextSize")
var TextToGrowUp = document.querySelector(".TextToModify")
var DownTextSize = document.querySelector(".DownTextSize")
var DefaultSize = 60
var TextSizeValue = document.querySelector(".Text-SizeValue")
var TextSizeHelp = document.querySelector(".TextSizeHelp")
var TextSizeHelpWindow = document.querySelector(".TextSizeHelpWindow")
var TextSizeHelpWindowOverlay = document.querySelector(".TextSizeHelpWindowOverlay")
var CloseTextSizeHelpWindow = document.querySelector(".CloseTextSizeHelpWindow")

var SaveLogo = document.querySelector("#SaveLogo")
var ResetLogo = document.querySelector("#ResetLogo")
var TextSaveInputContentButton = document.querySelector(".TextSaveInputContentButton")
var TextSaveInputContentButtonBol = true
var TextArea = document.querySelector(".TextArea")
var TextResetInputContentButton = document.querySelector(".TextResetInputContentButton")
var TextResetInputContentButtonBol = false
var TextAreaEquality = true
var InputEmptyAlert = document.querySelector(".InputEmptyAlert")
var InputEmptyAlertBol = false

var EditTextResetInputContentButtonOverFunction = function EditTextResetInputContentButtonOver () {
    TextResetInputContentButton.style.background =  'linear-gradient(to left, rgb(148, 1, 1), rgb(177, 2, 2))'
}

var EditTextResetInputContentButtonOutFunction = function EditTextResetInputContentButtonOut () {
    TextResetInputContentButton.style.background = 'linear-gradient(to right, rgba(202, 0, 0, 1), red)'
}
   
var EditTextResetInputContentButtonDownFunction = function EditTextResetInputContentButtonDown () {
    TextResetInputContentButton.style.background = 'linear-gradient(to left, red, rgb(218, 2, 2)'
}

var EditTextResetInputContentButtonUpFunction = function EditTextResetInputContentButtonUp () {
    TextResetInputContentButton.style.background = 'linear-gradient(to right, rgb(148, 1, 1), rgb(177, 2, 2))'
}

var ChangeResetLogoAndTextColorOverFunction = function ChangeResetLogoAndTextColorOver () {
    ResetLogo.style.color = 'rgba(255, 255, 255, 0.8)'
    TextResetInputContentButton.style.color = 'rgba(255, 255, 255, 0.8)'
}

var ChangeResetLogoAndTextColorOutFunction = function ChangeResetLogoAndTextColorOut () {
    ResetLogo.style.color = 'white'
    TextResetInputContentButton.style.color = 'white'
}


var EditTextSaveInputContentButtonOverFunction = function EditTextSaveInputContentButtonOver () {
    TextSaveInputContentButton.style.background = 'linear-gradient(to right, rgb(2, 91, 173), rgb(1, 125, 226))'
    TextSaveInputContentButton.style.color = 'rgba(255, 255, 255, 0.836)'
    SaveLogo.style.color = 'rgba(255, 255, 255, 0.836)'
}

var EditTextSaveInputContentButtonOutFunction = function EditTextSaveInputContentButtonOut () {
    TextSaveInputContentButton.style.background = 'linear-gradient(to left, rgb(0, 174, 255), rgb(0, 110, 255))'
    TextSaveInputContentButton.style.color = 'white'
    SaveLogo.style.color = 'white'
}

var EditTextSaveInputContentButtonDownFunction = function EditTextSaveInputContentButtonDown () {
    TextSaveInputContentButton.style.background = 'linear-gradient(to left, rgb(34, 185, 255), rgb(43, 135, 255))'
    TextSaveInputContentButton.style.color = 'rgba(255, 255, 255, 0.836)'
    SaveLogo.style.color = 'rgba(255, 255, 255, 0.836)'
}

var EditTextSaveInputContentButtonUpFunction = function EditTextSaveInputContentButtonUp () {
    TextSaveInputContentButton.style.background = 'linear-gradient(to right, rgb(2, 91, 173), rgb(1, 125, 226))'
    TextSaveInputContentButton.style.color = 'rgba(255, 255, 255, 0.836)'
    SaveLogo.style.color = 'rgba(255, 255, 255, 0.836)'
}


var EditInputEmptyAlertFocusFunction = function EditInputEmptyAlertFocus () {
    if (InputEmptyAlertBol == true) {
        TextArea.style.boxShadow = '0px 0px 3px 3px rgba(256, 0, 0, 0.350)'
        InputEmptyAlertBol = false
    }
    else {
        TextArea.style.boxShadow = '0px 0px 3px 3px rgba(1, 1, 1, 0.350)'
    }
}

var EditInputEmptyAlertBlurFunction = function EditInputEmptyAlertBlur () {
    TextArea.style.boxShadow = 'none'
    InputEmptyAlert.style.display = 'none'
    TextArea.style.border = 'solid 2px black'
}

var EditInputEmptyAlertFocusDisableFunction = function EditInputEmptyAlertFocusDisable () {
    TextArea.style.boxShadow = '0px 0px 3px 3px rgba(1, 1, 1, 0.350)'
}

var EditInputEmptyAlertBlurDisableFunction = function EditInputEmptyAlertBlurDisable () {
    TextArea.style.boxShadow = 'none'
}


UpTextSize.addEventListener("click", UpSize)
UpTextSize.addEventListener("mouseover", UpTextSizeOver)
UpTextSize.addEventListener("mouseout", UpTextSizeOut)
UpTextSize.addEventListener("mousedown", UpTextSizeDown)
UpTextSize.addEventListener("mouseup", UpTextSizeUp)

DownTextSize.addEventListener("click", DownSize)
DownTextSize.addEventListener("mouseover", DownTextSizeOver)
DownTextSize.addEventListener("mouseout", DownTextSizeOut)
DownTextSize.addEventListener("mousedown", DownTextSizeDown)
DownTextSize.addEventListener("mouseup", DownTextSizeUp)

TextSizeHelp.addEventListener("click", OpenTextSizeHelpWindowModal)

CloseTextSizeHelpWindow.addEventListener("click", CloseTextSizeHelpWindowModal)

TextSaveInputContentButton.addEventListener("click", EditTextToGrowUpContentAndSaveButton)
TextSaveInputContentButton.addEventListener("mouseover", EditSaveLogoOver)
TextSaveInputContentButton.addEventListener("mouseout", EditSaveLogoOut)

TextResetInputContentButton.addEventListener("click", RemoveTextInputContent)

TextArea.addEventListener("input", EditTextResetInputContentButton)
TextArea.addEventListener("input", EditTextSaveInputContentButton)



function UpSize () {
    if (DefaultSize==100) {
        UpTextSize.style.background = 'rgba(240, 215, 166, 0.250)'
        UpTextSize.style.color = 'rgba(0, 0, 0, 0.250)'
        UpTextSize.style.cursor = 'default'
    }
    else {
        DefaultSize+=2
        TextToGrowUp.style.fontSize = DefaultSize + 'px'
        TextSizeValue.textContent = DefaultSize + ' px'
        if (DefaultSize==100) { 
            UpTextSize.style.right = -107+'px'
            TextToGrowUp.style.right = 135+'px'
        }
    ChangeDownSizeStyle()
    }
}

function DownSize () {
    if (DefaultSize==20) {
        DownTextSize.style.backgroundColor = 'rgba(240, 215, 166, 0.250)'
        DownTextSize.style.color = 'rgba(0, 0, 0, 0.250)'
        DownTextSize.style.cursor = 'default'
    }
    else {
        DefaultSize-=2
        TextToGrowUp.style.fontSize=DefaultSize + 'px'
        TextSizeValue.textContent=DefaultSize + ' px'

        if (DefaultSize == 98) {
            UpTextSize.style.right = -102+'px'
        }
    ChangeUpSizeStyle()   
    }
}

function ChangeUpSizeStyle () {
    if (DefaultSize<100 & DefaultSize>20) {
        UpTextSize.style.cursor = 'pointer'
        UpTextSize.style.background = 'linear-gradient(rgb(255, 205, 113), rgb(255, 166, 0))'
        UpTextSize.style.color = 'black'
    }
}

function ChangeDownSizeStyle () {
    if (DefaultSize<100 & DefaultSize>20) {
        DownTextSize.style.cursor = 'pointer'
        DownTextSize.style.background = 'linear-gradient(rgb(255, 205, 113), rgb(255, 166, 0))'
        DownTextSize.style.color = 'black'
    }
}

function UpTextSizeOver () {
        UpTextSize.style.background = 'rgb(148, 108, 34)'
    if (DefaultSize == 100) {
        UpTextSize.style.background = 'rgba(240, 215, 166, 0.250)'
        UpTextSize.style.cursor = 'default'
    }

}

function UpTextSizeOut () {
    UpTextSize.style.background = 'linear-gradient(rgb(255, 205, 113), rgb(255, 166, 0))'
    if (DefaultSize == 100) {
        UpTextSize.style.background = 'rgba(240, 215, 166, 0.250)'
    }
}

function UpTextSizeDown () {
    UpTextSize.style.background = 'linear-gradient(rgb(255, 205, 113), rgb(255, 166, 0))'
    if (DefaultSize == 100) {
        UpTextSize.style.background = 'rgba(240, 215, 166, 0.250)'
    }
}

function UpTextSizeUp () {
    UpTextSize.style.background = 'rgb(148, 108, 34)'
    if (DefaultSize == 100) {
        UpTextSize.style.background = 'rgba(240, 215, 166, 0.250)'
    }
}

function DownTextSizeOver () {
    DownTextSize.style.background = 'rgb(148, 108, 34)'
    if (DefaultSize == 20) {
        DownTextSize.style.background = 'rgba(240, 215, 166, 0.250)'
    }
}

function DownTextSizeOut () {
    DownTextSize.style.background = 'linear-gradient(rgb(255, 205, 113), rgb(255, 166, 0))'
    if (DefaultSize == 20 ) {
        DownTextSize.style.background = 'rgba(240, 215, 166, 0.250)'
    }
}

function DownTextSizeDown () {
    DownTextSize.style.background = 'linear-gradient(rgb(255, 205, 113), rgb(255, 166, 0))'
    if (DefaultSize == 20) {
        DownTextSize.style.background = 'rgba(240, 215, 166, 0.250)'
    }
}

function DownTextSizeUp () {
    DownTextSize.style.background = 'rgb(148, 108, 34)'
    if (DefaultSize == 20 ) {
        DownTextSize.style.background = 'rgba(240, 215, 166, 0.250)'
    }
}

function OpenTextSizeHelpWindowModal () {
    TextSizeHelpWindowOverlay.style.display = 'block'
    TextSizeHelpWindow.style.display = 'block'
}

function CloseTextSizeHelpWindowModal () {
    TextSizeHelpWindowOverlay.style.display = 'none'
}

function EditSaveLogoOver () {
    if (TextSaveInputContentButtonBol == true) {
    SaveLogo.style.color = 'rgba(255, 255, 255, 0.836)'
    }
}

function EditSaveLogoOut () {
    if (TextSaveInputContentButtonBol == true) {
    SaveLogo.style.color = 'white'
    }
}

function GetTextAreaContentFunction () {
    GetTextAreaContent = TextArea.value
}

function EditTextToGrowUpContentAndSaveButton () {
    GetTextAreaContentFunction()
    TextToGrowUp.textContent = GetTextAreaContent
    TextAreaEquality = false
    TextSaveInputContentButtonBol = false
    if (TextAreaEquality == false) {
        TextArea.addEventListener("input", TextAreaEqualityFunction)
    }
    if (TextArea.value == '') {
        TextToGrowUp.textContent = 'Text'
        InputEmptyAlertBol = true
        TextArea.style.border = 'rgba(221, 4, 4, 0.7) solid 2px'
        TextArea.addEventListener("focus", EditInputEmptyAlertFocusFunction)
        TextArea.addEventListener("blur", EditInputEmptyAlertBlurFunction)
        TextArea.focus()

        InputEmptyAlert.style.display = 'block'
    }
    else {
        TextArea.removeEventListener("focus", EditInputEmptyAlertFocusFunction)
        TextArea.removeEventListener("blur", EditInputEmptyAlertBlurFunction)
        TextArea.addEventListener("focus", EditInputEmptyAlertFocusDisableFunction)
        TextArea.addEventListener("blur", EditInputEmptyAlertBlurDisableFunction)

        TextSaveInputContentButton.style.background = 'linear-gradient(to left, rgba(69, 143, 255, 0.3), rgba(21, 119, 247, 0.3))'
        TextSaveInputContentButton.style.color = 'rgba(255, 255, 255, 0.5)'
        TextSaveInputContentButton.style.border = 'rgba(1, 1, 1, 0.1) solid 2px'
        SaveLogo.style.color = 'rgba(255, 255, 255, 0.5)'
        TextSaveInputContentButton.style.cursor = 'not-allowed'

        TextSaveInputContentButton.removeEventListener("mouseover", EditTextSaveInputContentButtonOverFunction)
        TextSaveInputContentButton.removeEventListener("mouseout", EditTextSaveInputContentButtonOutFunction)
        TextSaveInputContentButton.removeEventListener("mousedown", EditTextSaveInputContentButtonDownFunction)
        TextSaveInputContentButton.removeEventListener("mouseup", EditTextSaveInputContentButtonUpFunction)
        }

}




function RemoveTextInputContent () {
    if (TextResetInputContentButtonBol == false) {     
        //Boutton Désactiver//  
    }
    else {
        TextArea.value = ''
        TextArea.focus()
        TextToGrowUp.textContent = 'Text'
        TextSaveInputContentButton.style.background = 'linear-gradient(to left, rgb(0, 174, 255), rgb(0, 110, 255))'
        TextSaveInputContentButton.style.border = 'solid black 2px'
        TextSaveInputContentButton.style.color = 'white'
        SaveLogo.style.color = 'white'

        TextSaveInputContentButton.style.cursor = 'pointer'
        TextResetInputContentButton.style.background = 'linear-gradient(to right, rgba(179, 2, 2, 0.15), rgba(255, 0, 0, 0.150))'
        TextResetInputContentButton.style.border = 'solid 2px rgba(1, 1, 1, 0.1)'
        TextResetInputContentButton.style.color = 'rgba(255, 255, 255, 0.5)'
        ResetLogo.style.color = 'rgba(255, 255, 255, 0.5)'
        TextResetInputContentButton.style.cursor = 'not-allowed'
        TextResetInputContentButtonBol = false
        
        TextResetInputContentButton.removeEventListener("mouseover", EditTextResetInputContentButtonOverFunction)
        TextResetInputContentButton.removeEventListener("mouseout", EditTextResetInputContentButtonOutFunction)
        TextResetInputContentButton.removeEventListener("mouseover", ChangeResetLogoAndTextColorOverFunction)
        TextResetInputContentButton.removeEventListener("mouseout", ChangeResetLogoAndTextColorOutFunction)
        TextResetInputContentButton.removeEventListener("mousedown", EditTextResetInputContentButtonDownFunction)
        TextResetInputContentButton.removeEventListener("mouseup", EditTextResetInputContentButtonUpFunction)

        TextSaveInputContentButton.addEventListener("mouseover", EditTextSaveInputContentButtonOverFunction)
        TextSaveInputContentButton.addEventListener("mouseout", EditTextSaveInputContentButtonOutFunction)
        TextSaveInputContentButton.addEventListener("mousedown", EditTextSaveInputContentButtonDownFunction)
        TextSaveInputContentButton.addEventListener("mouseup", EditTextSaveInputContentButtonUpFunction)
    }
}

function EditTextResetInputContentButton () {
    TextResetInputContentButton.style.background = 'linear-gradient(to right, rgba(202, 0, 0, 1), red)'
    TextResetInputContentButton.style.border = 'solid black 2px'
    TextResetInputContentButton.style.color = 'white'
    TextResetInputContentButton.style.cursor = 'pointer'
    ResetLogo.style.color = 'white'
    TextResetInputContentButtonBol = true
    TextResetInputContentButton.addEventListener("mouseover", EditTextResetInputContentButtonOverFunction)
    TextResetInputContentButton.addEventListener("mouseout", EditTextResetInputContentButtonOutFunction)
    TextResetInputContentButton.addEventListener("mouseover", ChangeResetLogoAndTextColorOverFunction)
    TextResetInputContentButton.addEventListener("mouseout", ChangeResetLogoAndTextColorOutFunction)
    TextResetInputContentButton.addEventListener("mousedown", EditTextResetInputContentButtonDownFunction)
    TextResetInputContentButton.addEventListener("mouseup", EditTextResetInputContentButtonUpFunction)
}


function EditTextSaveInputContentButton () {
    TextSaveInputContentButton.style.background = 'linear-gradient(to left, rgb(0, 174, 255), rgb(0, 110, 255))'
    TextSaveInputContentButton.style.border = 'solid black 2px'
    TextSaveInputContentButton.style.color = 'white'
    SaveLogo.style.color = 'white'
    TextSaveInputContentButton.style.cursor = 'pointer'
    TextSaveInputContentButton.addEventListener("mouseover", EditTextSaveInputContentButtonOverFunction)  
    TextSaveInputContentButton.addEventListener("mouseout", EditTextSaveInputContentButtonOutFunction)
    TextSaveInputContentButton.addEventListener("mousedown", EditTextSaveInputContentButtonDownFunction)
    TextSaveInputContentButton.addEventListener("mouseup", EditTextSaveInputContentButtonUpFunction)
    TextArea.style.border = 'black solid 2px'
    TextArea.style.boxShadow = '0px 0px 3px 3px rgba(0, 0, 0, 0.350)'
    InputEmptyAlert.style.display = 'none'
    TextSaveInputContentButtonBol = true
}



function TextAreaEqualityFunction () {
    if (TextAreaEquality == false) {
    GetTextAreaContent2 = TextArea.value
        if (GetTextAreaContent == GetTextAreaContent2) {
            if (GetTextAreaContent2 != '') {
            TextSaveInputContentButton.style.background = 'linear-gradient(to left, rgba(69, 143, 255, 0.3), rgba(21, 119, 247, 0.3))'
            TextSaveInputContentButton.style.border = 'rgba(0, 0, 0, 0.1) solid 2px'
            TextSaveInputContentButton.style.cursor = 'not-allowed'
            TextSaveInputContentButton.style.color = 'rgba(255, 255, 255, 0.5)'
            SaveLogo.style.color = 'rgba(255, 255, 255, 0.5)'
            }
            TextSaveInputContentButton.removeEventListener("mouseover", EditSaveLogoOver)
            TextSaveInputContentButton.removeEventListener("mouseout", EditSaveLogoOut)
            TextSaveInputContentButton.removeEventListener("mouseover", EditTextSaveInputContentButtonOverFunction)
            TextSaveInputContentButton.removeEventListener("mouseout", EditTextSaveInputContentButtonOutFunction)
            TextSaveInputContentButton.removeEventListener("mousedown", EditTextSaveInputContentButtonDownFunction)
            TextSaveInputContentButton.removeEventListener("mouseup", EditTextSaveInputContentButtonUpFunction)
            }
        }
}

// Text-Style //

    // Options // 

var FontFamilySelect = document.querySelector("#FontFamilySelect")
var FontFamilySelectOption1 = document.querySelector(".FontFamilySelectOption1")
var FontFamilySelectOption2 = document.querySelector(".FontFamilySelectOption2")
var FontFamilySelectOption3 = document.querySelector(".FontFamilySelectOption3")
var FontFamilySelectOption4 = document.querySelector(".FontFamilySelectOption4")
var FontFamilySelectOption5 = document.querySelector(".FontFamilySelectOption5")
var FontFamilySelectOption6 = document.querySelector(".FontFamilySelectOption6")
var FontFamilySelectOption7 = document.querySelector(".FontFamilySelectOption7")
var FontFamilySelectOption8 = document.querySelector(".FontFamilySelectOption8")
var FontFamilySelectOption9 = document.querySelector(".FontFamilySelectOption9")
var FontFamilySelectOption10 = document.querySelector(".FontFamilySelectOption10")

FontFamilySelectOption1.addEventListener("click", Option1)
FontFamilySelectOption2.addEventListener("click", Option2)
FontFamilySelectOption3.addEventListener("click", Option3)
FontFamilySelectOption4.addEventListener("click", Option4)
FontFamilySelectOption5.addEventListener("click", Option5)
FontFamilySelectOption6.addEventListener("click", Option6)
FontFamilySelectOption7.addEventListener("click", Option7)
FontFamilySelectOption8.addEventListener("click", Option8)
FontFamilySelectOption9.addEventListener("click", Option9)

function Option1 () {
    TextToGrowUp.style.fontFamily = '' 
}

function Option2 () {
    TextToGrowUp.style.fontFamily = 'Arial, Helvetica, sans-serif'
}

function Option3 () {
    TextToGrowUp.style.fontFamily = 'Courier New, Courier, monospace'
}

function Option4 () {
    TextToGrowUp.style.fontFamily = 'Century Gothic'
}

function Option5 () {
    TextToGrowUp.style.fontFamily = 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif'
}

function Option6 () {
    TextToGrowUp.style.fontFamily = 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'
}

function Option7 () {
    TextToGrowUp.style.fontFamily = 'Rockwell'
}

function Option8 () {
    TextToGrowUp.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
}

function Option9 () {
    TextToGrowUp.style.fontFamily = 'Verdana'
}

// Text Caracter //

var Bold = document.querySelector(".Bold")
var Italic = document.querySelector(".Italic")
var Underline = document.querySelector(".Underline")
var UnderlineBol = false
var Strikethrough = document.querySelector(".Strikethrough")
var StrikethroughBol = false

Bold.addEventListener("click", BoldFunctionTrue)
Italic.addEventListener("click", ItalicFunctionTrue)
Underline.addEventListener("click", UnderlineFunctionTrue)
Strikethrough.addEventListener("click", StrikethroughFunctionTrue)

function BoldFunctionTrue () {
    TextToGrowUp.style.fontWeight = 'bold'
    Bold.style.color = 'rgb(1, 182, 1)'
    Bold.style.boxShadow = '0px 0px 1px 1px rgb(1, 182, 1)'
    Bold.style.border = 'rgb(1, 182, 1) solid 2px'
    Bold.addEventListener("click", BoldFunctionFalse)
    Bold.removeEventListener("click", BoldFunctionTrue)
    Bold.addEventListener("mouseover", BoldOverTrue)
    Bold.addEventListener("mouseout", BoldOutTrue)
    Bold.removeEventListener("mouseover", BoldOverFalse)
    Bold.removeEventListener("mouseout", BoldOutFalse)
    Bold.addEventListener("mousedown", BoldDown)
    Bold.addEventListener("mouseup", BoldUp)
}

function BoldFunctionFalse () {
    TextToGrowUp.style.fontWeight = ''
    Bold.style.boxShadow = '0px 0px 0px 0px black'
    Bold.style.color = 'black'
    Bold.style.border = 'black solid 2px'
    Bold.addEventListener("click", BoldFunctionTrue)
    Bold.removeEventListener("click", BoldFunctionFalse)
    Bold.addEventListener("mouseover", BoldOverFalse)
    Bold.addEventListener("mouseout", BoldOutFalse)
    Bold.addEventListener("mousedown", BoldDown)
    Bold.addEventListener("mouseup", BoldUp)
}

function BoldOverTrue () {
    Bold.style.boxShadow = '0px 0px 1px 1px rgb(1, 206, 1)'
    Bold.style.color = 'rgb(1, 206, 1)'
    Bold.style.border = 'rgb(1, 206, 1) solid 2px'
}

function BoldOutTrue () {
    Bold.style.color = 'rgb(1, 182, 1)'
    Bold.style.boxShadow = '0px 0px 1px 1px rgb(1, 182, 1)'
    Bold.style.border = 'rgb(1, 182, 1) solid 2px'
}

function BoldOverFalse () {
    Bold.style.boxShadow = '0px 0px 1px 1px rgb(1, 182, 1)'
    Bold.style.color = 'rgb(1, 182, 1)'
    Bold.style.border = 'rgb(1, 182, 1) solid 2px'
}

function BoldOutFalse () {
    Bold.style.color = 'black'
    Bold.style.boxShadow = '0px 0px 0px 0px black'
    Bold.style.border = 'black solid 2px'
}

function BoldDown () {
    Bold.style.color = 'rgb(1, 206, 1)'
    Bold.style.boxShadow = '0px 0px 1px 1px rgb(1, 206, 1)'
    Bold.style.border = 'rgb(1, 206, 1) solid 2px'
}

function BoldUp () {
    Bold.style.boxShadow = '0px 0px 1px 1px rgb(1, 206, 1)'
    Bold.style.color = 'rgb(1, 206, 1)'
    Bold.style.border = 'rgb(1, 206, 1) solid 2px'
}

function ItalicFunctionTrue () {
    TextToGrowUp.style.fontStyle = 'italic'
    Italic.style.color = 'rgb(1, 182, 1)'
    Italic.style.boxShadow = '0px 0px 1px 1px rgb(1, 182, 1)'
    Italic.style.border = 'rgb(1, 182, 1) solid 2px'
    Italic.addEventListener("click", ItalicFunctionFalse)
    Italic.removeEventListener("click", ItalicFunctionTrue)
    Italic.addEventListener("mouseover", ItalicOverTrue)
    Italic.addEventListener("mouseout", ItalicOutTrue)
    Italic.removeEventListener("mouseover", ItalicOverFalse)
    Italic.removeEventListener("mouseout", ItalicOutFalse)
    Italic.addEventListener("mousedown", ItalicDown)
    Italic.addEventListener("mouseup", ItalicUp)
}

function ItalicFunctionFalse () {
    TextToGrowUp.style.fontStyle = ''
    Italic.style.boxShadow = '0px 0px 0px 0px black'
    Italic.style.color = 'black'
    Italic.style.border = 'black solid 2px'
    Italic.addEventListener("click", ItalicFunctionTrue)
    Italic.removeEventListener("click", ItalicFunctionFalse)
    Italic.addEventListener("mouseover", ItalicOverFalse)
    Italic.addEventListener("mouseout", ItalicOutFalse)
    Italic.addEventListener("mousedown", ItalicDown)
    Italic.addEventListener("mouseup", ItalicUp)
}

function ItalicOverTrue () {
    Italic.style.boxShadow = '0px 0px 1px 1px rgb(1, 206, 1)'
    Italic.style.color = 'rgb(1, 206, 1)'
    Italic.style.border = 'rgb(1, 206, 1) solid 2px'
}

function ItalicOutTrue () {
    Italic.style.color = 'rgb(1, 182, 1)'
    Italic.style.boxShadow = '0px 0px 1px 1px rgb(1, 182, 1)'
    Italic.style.border = 'rgb(1, 182, 1) solid 2px'
}

function ItalicOverFalse () {
    Italic.style.boxShadow = '0px 0px 1px 1px rgb(1, 182, 1)'
    Italic.style.color = 'rgb(1, 182, 1)'
    Italic.style.border = 'rgb(1, 182, 1) solid 2px'
}

function ItalicOutFalse () {
    Italic.style.color = 'black'
    Italic.style.boxShadow = '0px 0px 0px 0px black'
    Italic.style.border = 'black solid 2px'
}

function ItalicDown () {
    Italic.style.color = 'rgb(1, 206, 1)'
    Italic.style.boxShadow = '0px 0px 1px 1px rgb(1, 206, 1)'
    Italic.style.border = 'rgb(1, 206, 1) solid 2px'
}

function ItalicUp () {
    Italic.style.boxShadow = '0px 0px 1px 1px rgb(1, 206, 1)'
    Italic.style.color = 'rgb(1, 206, 1)'
    Italic.style.border = 'rgb(1, 206, 1) solid 2px'
}

function UnderlineFunctionTrue () {
    UnderlineBol = true
    TextToGrowUp.style.textDecoration = 'underline'
    if (UnderlineBol == true & StrikethroughBol == true) {
        TextToGrowUp.style.textDecoration = 'line-through underline'
    }
    Underline.style.color = 'rgb(1, 182, 1)'
    Underline.style.boxShadow = '0px 0px 1px 1px rgb(1, 182, 1)'
    Underline.style.border = 'rgb(1, 182, 1) solid 2px'
    Underline.addEventListener("click", UnderlineFunctionFalse)
    Underline.removeEventListener("click", UnderlineFunctionTrue)
    Underline.addEventListener("mouseover", UnderlineOverTrue)
    Underline.addEventListener("mouseout", UnderlineOutTrue)
    Underline.removeEventListener("mouseover", UnderlineOverFalse)
    Underline.removeEventListener("mouseout", UnderlineOutFalse)
    Underline.addEventListener("mousedown", UnderlineDown)
    Underline.addEventListener("mouseup", UnderlineUp)
}

function UnderlineFunctionFalse () {
    UnderlineBol = false
    if (StrikethroughBol == true & UnderlineBol == false) {
        TextToGrowUp.style.textDecoration = 'line-through'
    }
    if (StrikethroughBol == false & UnderlineBol == false) {
        TextToGrowUp.style.textDecoration = 'none'
    }
    Underline.style.boxShadow = '0px 0px 0px 0px black'
    Underline.style.color = 'black'
    Underline.style.border = 'black solid 2px'
    Underline.addEventListener("click", UnderlineFunctionTrue)
    Underline.removeEventListener("click", UnderlineFunctionFalse)
    Underline.addEventListener("mouseover", UnderlineOverFalse)
    Underline.addEventListener("mouseout", UnderlineOutFalse)
    Underline.addEventListener("mousedown", UnderlineDown)
    Underline.addEventListener("mouseup", UnderlineUp)
}

function UnderlineOverTrue () {
    Underline.style.boxShadow = '0px 0px 1px 1px rgb(1, 206, 1)'
    Underline.style.color = 'rgb(1, 206, 1)'
    Underline.style.border = 'rgb(1, 206, 1) solid 2px'
}

function UnderlineOutTrue () {
    Underline.style.color = 'rgb(1, 182, 1)'
    Underline.style.boxShadow = '0px 0px 1px 1px rgb(1, 182, 1)'
    Underline.style.border = 'rgb(1, 182, 1) solid 2px'
}

function UnderlineOverFalse () {
    Underline.style.boxShadow = '0px 0px 1px 1px rgb(1, 182, 1)'
    Underline.style.color = 'rgb(1, 182, 1)'
    Underline.style.border = 'rgb(1, 182, 1) solid 2px'
}

function UnderlineOutFalse () {
    Underline.style.color = 'black'
    Underline.style.boxShadow = '0px 0px 0px 0px black'
    Underline.style.border = 'black solid 2px'
}

function UnderlineDown () {
    Underline.style.color = 'rgb(1, 206, 1)'
    Underline.style.boxShadow = '0px 0px 1px 1px rgb(1, 206, 1)'
    Underline.style.border = 'rgb(1, 206, 1) solid 2px'
}

function UnderlineUp () {
    Underline.style.boxShadow = '0px 0px 1px 1px rgb(1, 206, 1)'
    Underline.style.color = 'rgb(1, 206, 1)'
    Underline.style.border = 'rgb(1, 206, 1) solid 2px'
}

function StrikethroughFunctionTrue () {
    StrikethroughBol = true
    TextToGrowUp.style.textDecoration = 'line-through'
    if (UnderlineBol == true & StrikethroughBol == true) {
        TextToGrowUp.style.textDecoration = 'line-through underline'
    }
    Strikethrough.style.color = 'rgb(1, 182, 1)'
    Strikethrough.style.boxShadow = '0px 0px 1px 1px rgb(1, 182, 1)'
    Strikethrough.style.border = 'rgb(1, 182, 1) solid 2px'
    Strikethrough.addEventListener("click", StrikethroughFunctionFalse)
    Strikethrough.removeEventListener("click", StrikethroughFunctionTrue)
    Strikethrough.addEventListener("mouseover", StrikethroughOverTrue)
    Strikethrough.addEventListener("mouseout", StrikethroughOutTrue)
    Strikethrough.removeEventListener("mouseover", StrikethroughOverFalse)
    Strikethrough.removeEventListener("mouseout", StrikethroughOutFalse)
    Strikethrough.addEventListener("mousedown", StrikethroughDown)
    Strikethrough.addEventListener("mouseup", StrikethroughUp)
}

function StrikethroughFunctionFalse () {
    StrikethroughBol = false
    if (StrikethroughBol == false & UnderlineBol == true) {
        TextToGrowUp.style.textDecoration = 'underline'
    }
    if (StrikethroughBol == false & UnderlineBol == false) {
        TextToGrowUp.style.textDecoration = 'none'
    }
    Strikethrough.style.boxShadow = '0px 0px 0px 0px black'
    Strikethrough.style.color = 'black'
    Strikethrough.style.border = 'black solid 2px'
    Strikethrough.addEventListener("click", StrikethroughFunctionTrue)
    Strikethrough.removeEventListener("click", StrikethroughFunctionFalse)
    Strikethrough.addEventListener("mouseover", StrikethroughOverFalse)
    Strikethrough.addEventListener("mouseout", StrikethroughOutFalse)
    Strikethrough.addEventListener("mousedown", StrikethroughDown)
    Strikethrough.addEventListener("mouseup", StrikethroughUp)
}

function StrikethroughOverTrue () {
    Strikethrough.style.boxShadow = '0px 0px 1px 1px rgb(1, 206, 1)'
    Strikethrough.style.color = 'rgb(1, 206, 1)'
    Strikethrough.style.border = 'rgb(1, 206, 1) solid 2px'
}

function StrikethroughOutTrue () {
    Strikethrough.style.color = 'rgb(1, 182, 1)'
    Strikethrough.style.boxShadow = '0px 0px 1px 1px rgb(1, 182, 1)'
    Strikethrough.style.border = 'rgb(1, 182, 1) solid 2px'
}

function StrikethroughOverFalse () {
    Strikethrough.style.boxShadow = '0px 0px 1px 1px rgb(1, 182, 1)'
    Strikethrough.style.color = 'rgb(1, 182, 1)'
    Strikethrough.style.border = 'rgb(1, 182, 1) solid 2px'
}

function StrikethroughOutFalse () {
    Strikethrough.style.color = 'black'
    Strikethrough.style.boxShadow = '0px 0px 0px 0px black'
    Strikethrough.style.border = 'black solid 2px'
}

function StrikethroughDown () {
    Strikethrough.style.color = 'rgb(1, 206, 1)'
    Strikethrough.style.boxShadow = '0px 0px 1px 1px rgb(1, 206, 1)'
    Strikethrough.style.border = 'rgb(1, 206, 1) solid 2px'
}

function StrikethroughUp () {
    Strikethrough.style.boxShadow = '0px 0px 1px 1px rgb(1, 206, 1)'
    Strikethrough.style.color = 'rgb(1, 206, 1)'
    Strikethrough.style.border = 'rgb(1, 206, 1) solid 2px'
}


    //Text-Color

var ColorPallet = document.querySelector(".ColorPallet")
var ColorPalletBol = true
var ColorValueText = document.querySelector(".ColorValueText")
var ColorValueCube = document.querySelector(".ColorValueCube")
var ColorValueBackground = document.querySelector(".ColorValueBackground")
var HexaInput = document.querySelector("#HexaInput")

var Row1 = document.querySelector("Row1")
var Red = document.querySelector(".Red")
var Orange = document.querySelector(".Orange")
var Yellow = document.querySelector(".Yellow")
var Lemon = document.querySelector(".Lemon")
var LightGreen = document.querySelector(".LightGreen")
var Green = document.querySelector(".Green")
var Aqua = document.querySelector(".Aqua")
var Yellow = document.querySelector(".Yellow")
var Turquoise = document.querySelector(".Turquoise")
var Blue = document.querySelector(".Blue")
var Purple = document.querySelector(".Purple")
var Pink = document.querySelector(".Pink")
var White = document.querySelector(".White")
var LightGray = document.querySelector(".LightGray")
var DarkGray = document.querySelector(".DarkGray")
var Black = document.querySelector(".Black")


ColorValueBackground.addEventListener("click", OpenColorPallet)

function OpenColorPallet () {
    if (ColorPalletBol == true) {
        ColorPallet.style.display = 'block'
        ColorPalletBol = false
    }
    else {
        ColorPallet.style.display = 'none'
        ColorPalletBol = true
    }
}

//ColorButtonFunction

Red.addEventListener("click", () => {
    TextToGrowUp.style.color = 'red'
    Red.style.outline = 'black solid 2px'
    ColorValueText.style.color = 'red'
    ColorValueText.textContent = 'Red'
    ColorValueCube.style.background = 'red'
    HexaInput.value = ''

    Orange.style.outline = 'none'
    Yellow.style.outline = 'none'
    Lemon.style.outline = 'none'
    LightGreen.style.outline = 'none'
    Green.style.outline = 'none'
    Aqua.style.outline = 'none'
    Turquoise.style.outline = 'none'
    Blue.style.outline = 'none'
    Purple.style.outline = 'none'
    Pink.style.outline = 'none'
    White.style.outline = 'none'
    LightGray.style.outline = 'none'
    DarkGray.style.outline = 'none'
    Black.style.outline = 'none'
})

Orange.addEventListener("click", () => {
    TextToGrowUp.style.color = 'orange'
    Orange.style.outline = 'black solid 2px'
    ColorValueText.style.color = 'orange'
    ColorValueText.textContent = 'Orange'
    ColorValueCube.style.background = 'orange'
    HexaInput.value = ''

    Red.style.outline = 'none'
    Yellow.style.outline = 'none'
    Lemon.style.outline = 'none'
    LightGreen.style.outline = 'none'
    Green.style.outline = 'none'
    Aqua.style.outline = 'none'
    Turquoise.style.outline = 'none'
    Blue.style.outline = 'none'
    Purple.style.outline = 'none'
    Pink.style.outline = 'none'
    White.style.outline = 'none'
    LightGray.style.outline = 'none'
    DarkGray.style.outline = 'none'
    Black.style.outline = 'none'
})

Yellow.addEventListener("click", () => {
    TextToGrowUp.style.color = 'yellow'
    Yellow.style.outline = 'black solid 2px'
    ColorValueText.style.color = 'yellow'
    ColorValueText.textContent = 'Yellow'
    ColorValueCube.style.background = 'yellow'
    HexaInput.value = ''

    Red.style.outline = 'none'
    Orange.style.outline = 'none'
    Lemon.style.outline = 'none'
    LightGreen.style.outline = 'none'
    Green.style.outline = 'none'
    Aqua.style.outline = 'none'
    Turquoise.style.outline = 'none'
    Blue.style.outline = 'none'
    Purple.style.outline = 'none'
    Pink.style.outline = 'none'
    White.style.outline = 'none'
    LightGray.style.outline = 'none'
    DarkGray.style.outline = 'none'
    Black.style.outline = 'none'
})

Lemon.addEventListener("click", () => {
    TextToGrowUp.style.color = 'rgb(187, 255, 0)'
    Lemon.style.outline = 'black solid 2px'
    ColorValueText.style.color = 'rgb(187, 255, 0)'
    ColorValueText.textContent = 'Lemon'
    ColorValueCube.style.background = 'rgb(187, 255, 0)'
    HexaInput.value = ''

    Red.style.outline = 'none'
    Orange.style.outline = 'none'
    Yellow.style.outline = 'none'
    LightGreen.style.outline = 'none'
    Green.style.outline = 'none'
    Aqua.style.outline = 'none'
    Turquoise.style.outline = 'none'
    Blue.style.outline = 'none'
    Purple.style.outline = 'none'
    Pink.style.outline = 'none'
    White.style.outline = 'none'
    LightGray.style.outline = 'none'
    DarkGray.style.outline = 'none'
    Black.style.outline = 'none'
})

LightGreen.addEventListener("click", () => {
    TextToGrowUp.style.color = 'lightgreen'
    LightGreen.style.outline = 'black solid 2px'
    ColorValueText.style.color = 'lightgreen'
    ColorValueText.textContent = 'L.Green'
    ColorValueCube.style.background = 'rgb(187, 255, 0)'
    HexaInput.value = ''

    Red.style.outline = 'none'
    Orange.style.outline = 'none'
    Yellow.style.outline = 'none'
    Lemon.style.outline = 'none'
    Green.style.outline = 'none'
    Aqua.style.outline = 'none'
    Turquoise.style.outline = 'none'
    Blue.style.outline = 'none'
    Purple.style.outline = 'none'
    Pink.style.outline = 'none'
    White.style.outline = 'none'
    LightGray.style.outline = 'none'
    DarkGray.style.outline = 'none'
    Black.style.outline = 'none'
})

Green.addEventListener("click", () => {
    TextToGrowUp.style.color = 'darkgreen'
    Green.style.outline = 'black solid 2px'
    ColorValueText.style.color = 'green'
    ColorValueText.textContent = 'D.Green'
    ColorValueCube.style.background = 'green'
    HexaInput.value = ''

    Red.style.outline = 'none'
    Orange.style.outline = 'none'
    Yellow.style.outline = 'none'
    Lemon.style.outline = 'none'
    LightGreen.style.outline = 'none'
    Aqua.style.outline = 'none'
    Turquoise.style.outline = 'none'
    Blue.style.outline = 'none'
    Purple.style.outline = 'none'
    Pink.style.outline = 'none'
    White.style.outline = 'none'
    LightGray.style.outline = 'none'
    DarkGray.style.outline = 'none'
    Black.style.outline = 'none'
})

Aqua.addEventListener("click", () => {
    TextToGrowUp.style.color = 'aqua'
    Aqua.style.outline = 'black solid 2px'
    ColorValueText.style.color = 'aqua'
    ColorValueText.textContent = 'Aqua'
    ColorValueCube.style.background = 'aqua'
    HexaInput.value = ''

    Red.style.outline = 'none'
    Orange.style.outline = 'none'
    Yellow.style.outline = 'none'
    Lemon.style.outline = 'none'
    LightGreen.style.outline = 'none'
    Green.style.outline = 'none'
    Turquoise.style.outline = 'none'
    Blue.style.outline = 'none'
    Purple.style.outline = 'none'
    Pink.style.outline = 'none'
    White.style.outline = 'none'
    LightGray.style.outline = 'none'
    DarkGray.style.outline = 'none'
    Black.style.outline = 'none'
})

Turquoise.addEventListener("click", () => {
    TextToGrowUp.style.color = 'turquoise'
    Turquoise.style.outline = 'black solid 2px'
    ColorValueText.style.color = 'turquoise'
    ColorValueText.textContent = 'Turqu.'
    ColorValueCube.style.background = 'turquoise'
    HexaInput.value = ''

    Red.style.outline = 'none'
    Orange.style.outline = 'none'
    Yellow.style.outline = 'none'
    Lemon.style.outline = 'none'
    LightGreen.style.outline = 'none'
    Green.style.outline = 'none'
    Aqua.style.outline = 'none'
    Blue.style.outline = 'none'
    Purple.style.outline = 'none'
    Pink.style.outline = 'none'
    White.style.outline = 'none'
    LightGray.style.outline = 'none'
    DarkGray.style.outline = 'none'
    Black.style.outline = 'none'
})

Blue.addEventListener("click", () => {
    TextToGrowUp.style.color = 'blue'
    Blue.style.outline = 'black solid 2px'
    ColorValueText.style.color = 'blue'
    ColorValueText.textContent = 'Blue'
    ColorValueCube.style.background = 'blue'
    HexaInput.value = ''

    Red.style.outline = 'none'
    Orange.style.outline = 'none'
    Yellow.style.outline = 'none'
    Lemon.style.outline = 'none'
    LightGreen.style.outline = 'none'
    Green.style.outline = 'none'
    Aqua.style.outline = 'none'
    Turquoise.style.outline = 'none'
    Purple.style.outline = 'none'
    Pink.style.outline = 'none'
    White.style.outline = 'none'
    LightGray.style.outline = 'none'
    DarkGray.style.outline = 'none'
    Black.style.outline = 'none'
})

Purple.addEventListener("click", () => {
    TextToGrowUp.style.color = 'purple'
    Purple.style.outline = 'black solid 2px'
    ColorValueText.style.color = 'purple'
    ColorValueText.textContent = 'Purple'
    ColorValueCube.style.background = 'purple'
    HexaInput.value = ''

    Red.style.outline = 'none'
    Orange.style.outline = 'none'
    Yellow.style.outline = 'none'
    Lemon.style.outline = 'none'
    LightGreen.style.outline = 'none'
    Green.style.outline = 'none'
    Aqua.style.outline = 'none'
    Turquoise.style.outline = 'none'
    Blue.style.outline = 'none'
    Pink.style.outline = 'none'
    White.style.outline = 'none'
    LightGray.style.outline = 'none'
    DarkGray.style.outline = 'none'
    Black.style.outline = 'none'
})
Pink.addEventListener("click", () => {
    TextToGrowUp.style.color = 'rgb(255, 0, 200)'
    Pink.style.outline = 'black solid 2px'
    ColorValueText.style.color = 'rgb(255, 0, 200)'
    ColorValueText.textContent = 'Pink'
    ColorValueCube.style.background = 'rgb(255, 0, 200)'
    HexaInput.value = ''

    Red.style.outline = 'none'
    Orange.style.outline = 'none'
    Yellow.style.outline = 'none'
    Lemon.style.outline = 'none'
    LightGreen.style.outline = 'none'
    Green.style.outline = 'none'
    Aqua.style.outline = 'none'
    Turquoise.style.outline = 'none'
    Blue.style.outline = 'none'
    Purple.style.outline = 'none'
    White.style.outline = 'none'
    LightGray.style.outline = 'none'
    DarkGray.style.outline = 'none'
    Black.style.outline = 'none'
})

White.addEventListener("click", () => {
    TextToGrowUp.style.color = 'white'
    White.style.outline = 'black solid 2px'
    ColorValueText.style.color = 'white'
    ColorValueText.textContent = 'White'
    ColorValueCube.style.background = 'white'
    HexaInput.value = ''

    Red.style.outline = 'none'
    Orange.style.outline = 'none'
    Yellow.style.outline = 'none'
    Lemon.style.outline = 'none'
    LightGreen.style.outline = 'none'
    Green.style.outline = 'none'
    Aqua.style.outline = 'none'
    Turquoise.style.outline = 'none'
    Blue.style.outline = 'none'
    Purple.style.outline = 'none'
    Pink.style.outline = 'none'
    LightGray.style.outline = 'none'
    DarkGray.style.outline = 'none'
    Black.style.outline = 'none'
})

LightGray.addEventListener("click", () => {
    TextToGrowUp.style.color = 'lightgray'
    LightGray.style.outline = 'black solid 2px'
    ColorValueText.style.color = 'lightgray'
    ColorValueText.textContent = 'L.Gray'
    ColorValueCube.style.background = 'lightgray'
    HexaInput.value = ''

    Red.style.outline = 'none'
    Orange.style.outline = 'none'
    Yellow.style.outline = 'none'
    Lemon.style.outline = 'none'
    LightGreen.style.outline = 'none'
    Green.style.outline = 'none'
    Aqua.style.outline = 'none'
    Turquoise.style.outline = 'none'
    Blue.style.outline = 'none'
    Purple.style.outline = 'none'
    Pink.style.outline = 'none'
    White.style.outline = 'none'
    DarkGray.style.outline = 'none'
    Black.style.outline = 'none'
})

DarkGray.addEventListener("click", () => {
    TextToGrowUp.style.color = 'darkgray'
    DarkGray.style.outline = 'black solid 2px'
    ColorValueText.style.color = 'gray'
    ColorValueText.textContent = 'D.Gray'
    ColorValueCube.style.background = 'darkgray'
    HexaInput.value = ''

    Red.style.outline = 'none'
    Orange.style.outline = 'none'
    Yellow.style.outline = 'none'
    Lemon.style.outline = 'none'
    LightGreen.style.outline = 'none'
    Green.style.outline = 'none'
    Aqua.style.outline = 'none'
    Turquoise.style.outline = 'none'
    Blue.style.outline = 'none'
    Purple.style.outline = 'none'
    Pink.style.outline = 'none'
    White.style.outline = 'none'
    LightGray.style.outline = 'none'
    Black.style.outline = 'none'
})

Black.addEventListener("click", () => {
    TextToGrowUp.style.color = 'black'
    Black.style.outline = 'darkgray 2px solid'
    ColorValueText.style.color = 'black'
    ColorValueText.textContent = 'Black'
    ColorValueCube.style.background = 'black'
    HexaInput.value = ''

    Red.style.outline = 'none'
    Orange.style.outline = 'none'
    Yellow.style.outline = 'none'
    Lemon.style.outline = 'none'
    LightGreen.style.outline = 'none'
    Green.style.outline = 'none'
    Aqua.style.outline = 'none'
    Turquoise.style.outline = 'none'
    Blue.style.outline = 'none'
    Purple.style.outline = 'none'
    Pink.style.outline = 'none'
    White.style.outline = 'none'
    LightGray.style.outline = 'none'
    DarkGray.style.outline = 'none'
})

HexaInput.addEventListener("input", () =>{
    var GetColorValueText = HexaInput.value
    if (GetColorValueText[0] == '#') {
        if (GetColorValueText.length == 7) {
            ColorValueCube.style.background = `${GetColorValueText}`
            ColorValueText.style.color = `${GetColorValueText}`
            ColorValueText.textContent = `${GetColorValueText}`
            TextToGrowUp.style.color = `${GetColorValueText}`

            Red.style.outline = 'none'
            Orange.style.outline = 'none'
            Yellow.style.outline = 'none'
            Lemon.style.outline = 'none'
            LightGreen.style.outline = 'none'
            Green.style.outline = 'none'
            Aqua.style.outline = 'none'
            Turquoise.style.outline = 'none'
            Blue.style.outline = 'none'
            Purple.style.outline = 'none'
            Pink.style.outline = 'none'
            White.style.outline = 'none'
            LightGray.style.outline = 'none'
            DarkGray.style.outline = 'none'
            Black.style.outline = 'none'
        }        
    }
    else {
        if (GetColorValueText.length == 6) {
            ColorValueCube.style.background = `#${GetColorValueText}`
            ColorValueText.style.color = `#${GetColorValueText}`
            ColorValueText.textContent = `#${GetColorValueText}`
            TextToGrowUp.style.color = `#${GetColorValueText}`
            
            Red.style.outline = 'none'
            Orange.style.outline = 'none'
            Yellow.style.outline = 'none'
            Lemon.style.outline = 'none'
            LightGreen.style.outline = 'none'
            Green.style.outline = 'none'
            Aqua.style.outline = 'none'
            Turquoise.style.outline = 'none'
            Blue.style.outline = 'none'
            Purple.style.outline = 'none'
            Pink.style.outline = 'none'
            White.style.outline = 'none'
            LightGray.style.outline = 'none'
            DarkGray.style.outline = 'none'
            Black.style.outline = 'none'
        }   
    }
})