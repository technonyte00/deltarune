registerProcessor('audio-worklet',class extends AudioWorkletProcessor
{constructor()
{super();this.shouldExit=false;this.port.onmessage=(event)=>{this.shouldExit=event.data;};}
Float32ToInt16(n)
{return(n>0)?n*32767:n*32768;}
process(inputs,outputs,parameters)
{const input=inputs[0];const output=[];if(input[0]!=undefined)
{for(let i=0;i<input[0].length;++i)
{const sample=this.Float32ToInt16(input[0][i]);output.push(sample);}
this.port.postMessage(output);}
return(!this.shouldExit);}});
