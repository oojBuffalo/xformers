Search.setIndex({docnames:["components/attentions","components/feedforward","components/index","components/mha","components/position_embedding","components/reversible","custom_parts/index","factory/block","factory/index","factory/model","index","tutorials/blocksparse","tutorials/extend_attentions","tutorials/index","tutorials/pytorch_encoder","tutorials/reversible","tutorials/sparse_vit","tutorials/triton","tutorials/use_attention","what_is_xformers"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["components/attentions.rst","components/feedforward.rst","components/index.rst","components/mha.rst","components/position_embedding.rst","components/reversible.rst","custom_parts/index.rst","factory/block.rst","factory/index.rst","factory/model.rst","index.rst","tutorials/blocksparse.rst","tutorials/extend_attentions.rst","tutorials/index.rst","tutorials/pytorch_encoder.rst","tutorials/reversible.rst","tutorials/sparse_vit.rst","tutorials/triton.rst","tutorials/use_attention.rst","what_is_xformers.rst"],objects:{"xformers.components":{MultiHeadDispatch:[3,0,1,""],attention:[0,3,0,"-"],feedforward:[1,3,0,"-"],positional_embedding:[4,3,0,"-"]},"xformers.components.MultiHeadDispatch":{forward:[3,1,1,""],from_config:[3,1,1,""],training:[3,2,1,""]},"xformers.components.attention":{Attention:[0,0,1,""],AttentionMask:[0,0,1,""],FavorAttention:[0,0,1,""],GlobalAttention:[0,0,1,""],LinformerAttention:[0,0,1,""],LocalAttention:[0,0,1,""],NystromAttention:[0,0,1,""],OrthoFormerAttention:[0,0,1,""],RandomAttention:[0,0,1,""],ScaledDotProduct:[0,0,1,""],build_attention:[0,4,1,""],register_attention:[0,4,1,""]},"xformers.components.attention.Attention":{forward:[0,1,1,""],from_config:[0,1,1,""]},"xformers.components.attention.AttentionMask":{device:[0,1,1,""],dtype:[0,1,1,""],from_bool:[0,1,1,""],from_multiplicative:[0,1,1,""],is_sparse:[0,1,1,""],make_causal:[0,1,1,""],make_crop:[0,1,1,""],ndim:[0,1,1,""],shape:[0,1,1,""],to:[0,1,1,""],to_bool:[0,1,1,""]},"xformers.components.attention.FavorAttention":{__init__:[0,1,1,""],forward:[0,1,1,""]},"xformers.components.attention.GlobalAttention":{__init__:[0,1,1,""],forward:[0,1,1,""]},"xformers.components.attention.LinformerAttention":{__init__:[0,1,1,""],forward:[0,1,1,""]},"xformers.components.attention.LocalAttention":{__init__:[0,1,1,""],forward:[0,1,1,""]},"xformers.components.attention.NystromAttention":{__init__:[0,1,1,""],forward:[0,1,1,""]},"xformers.components.attention.OrthoFormerAttention":{__init__:[0,1,1,""],forward:[0,1,1,""]},"xformers.components.attention.RandomAttention":{__init__:[0,1,1,""],forward:[0,1,1,""]},"xformers.components.attention.ScaledDotProduct":{forward:[0,1,1,""],mask:[0,2,1,""]},"xformers.components.feedforward":{Feedforward:[1,0,1,""],MLP:[1,0,1,""],build_feedforward:[1,4,1,""],register_feedforward:[1,4,1,""]},"xformers.components.feedforward.Feedforward":{from_config:[1,1,1,""],training:[1,2,1,""]},"xformers.components.feedforward.MLP":{forward:[1,1,1,""],training:[1,2,1,""]},"xformers.components.positional_embedding":{RotaryEmbedding:[4,0,1,""],SinePositionalEmbedding:[4,0,1,""],VocabEmbedding:[4,0,1,""],build_positional_embedding:[4,4,1,""],register_positional_embedding:[4,4,1,""]},"xformers.components.positional_embedding.RotaryEmbedding":{forward:[4,1,1,""],training:[4,2,1,""]},"xformers.components.positional_embedding.SinePositionalEmbedding":{forward:[4,1,1,""],training:[4,2,1,""]},"xformers.components.positional_embedding.VocabEmbedding":{forward:[4,1,1,""],training:[4,2,1,""]},"xformers.components.reversible":{Deterministic:[5,0,1,""],ReversibleBlock:[5,0,1,""],ReversibleSequence:[5,0,1,""]},"xformers.components.reversible.Deterministic":{forward:[5,1,1,""],record_rng:[5,1,1,""],training:[5,2,1,""]},"xformers.components.reversible.ReversibleBlock":{backward_pass:[5,1,1,""],forward:[5,1,1,""],training:[5,2,1,""]},"xformers.components.reversible.ReversibleSequence":{forward:[5,1,1,""],training:[5,2,1,""]},"xformers.factory":{block_factory:[7,3,0,"-"],model_factory:[9,3,0,"-"]},"xformers.factory.block_factory":{BlockType:[7,0,1,""],LayerPosition:[7,0,1,""],LayerPositionBitmask:[7,0,1,""],xFormerBlockConfig:[7,0,1,""],xFormerDecoderBlock:[7,0,1,""],xFormerDecoderConfig:[7,0,1,""],xFormerEncoderBlock:[7,0,1,""],xFormerEncoderConfig:[7,0,1,""]},"xformers.factory.block_factory.BlockType":{Decoder:[7,2,1,""],Encoder:[7,2,1,""]},"xformers.factory.block_factory.LayerPosition":{is_first:[7,1,1,""],is_last:[7,1,1,""],mark_not_first:[7,1,1,""],mark_not_last:[7,1,1,""]},"xformers.factory.block_factory.LayerPositionBitmask":{Default:[7,2,1,""],First:[7,2,1,""],Last:[7,2,1,""]},"xformers.factory.block_factory.xFormerBlockConfig":{block_type:[7,2,1,""],dim_model:[7,2,1,""],feedforward_config:[7,2,1,""],layer_norm_style:[7,2,1,""],layer_position:[7,2,1,""],num_layers:[7,2,1,""],position_encoding_config:[7,2,1,""],reversible:[7,2,1,""],use_triton:[7,2,1,""]},"xformers.factory.block_factory.xFormerDecoderBlock":{forward:[7,1,1,""],from_config:[7,1,1,""],training:[7,2,1,""]},"xformers.factory.block_factory.xFormerDecoderConfig":{multi_head_config_cross:[7,2,1,""],multi_head_config_masked:[7,2,1,""]},"xformers.factory.block_factory.xFormerEncoderBlock":{forward:[7,1,1,""],from_config:[7,1,1,""],get_reversible_layer:[7,1,1,""],training:[7,2,1,""]},"xformers.factory.block_factory.xFormerEncoderConfig":{multi_head_config:[7,2,1,""],use_triton:[7,2,1,""]},"xformers.factory.model_factory":{xFormer:[9,0,1,""],xFormerConfig:[9,0,1,""]},"xformers.factory.model_factory.xFormer":{__init__:[9,1,1,""],forward:[9,1,1,""],from_config:[9,1,1,""],training:[9,2,1,""]},"xformers.factory.model_factory.xFormerConfig":{stack_configs:[9,2,1,""],tie_embedding_weights:[9,2,1,""]},xformers:{triton:[6,3,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","module","Python module"],"4":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:module","4":"py:function"},terms:{"1024":[11,14,18],"1182":14,"128":14,"151mb":11,"1536":14,"155":14,"1950":14,"1e3":11,"1e6":11,"2017":15,"2020":[0,15],"2021":[0,17],"2048":[11,14],"224":16,"2709":14,"3080":17,"384":[14,18],"393mb":11,"4117":14,"512":14,"619m":11,"837m":11,"\u0142":15,"abstract":0,"boolean":[0,15],"break":19,"case":[0,14,16,17,18],"catch":14,"class":[0,1,3,4,5,7,9,12,15],"default":[6,7,12,14],"enum":7,"export":6,"float":[0,1,3,4,12,14],"function":[11,15,16],"import":[11,14,16,17,18],"int":[0,1,3,4,5,7,12,14,15],"new":[12,14,18,19],"return":[0,14,16],"short":17,"static":7,"true":[0,3,5,6,7,9,11,12,14,15,17],"try":[11,14],"while":[0,14],And:19,Doing:12,Eye:0,For:[0,1,4,14],Its:[14,15],One:15,PRs:19,That:18,The:[0,3,4,6,7,9,11,12,14,15,16,17,18],There:[6,12,14,17,18],These:[6,17],Use:9,Using:[9,10,13],With:14,__init__:[0,9,12,15],_bigbird:0,_self_:14,_target_:14,_you:11,abl:6,ablat:19,abov:[6,14,15,16],abs:14,accept:[0,12],accuraci:15,across:19,activ:[1,6,9,14,15],actual:[3,11,17],adapt:15,add_modul:16,added:14,adding:14,addit:0,additive_mask:0,advanc:14,affect:15,after:11,against:19,agnost:19,ahm:0,aim:19,ainsli:0,alberti:0,algorithm:0,all:[0,3,7,10,12,13,15,17,18,19],allow:[0,1,4,18,19],alon:19,along:[0,11,14,17],alreadi:[11,14,16],also:[6,12,14,15,17,19],alter:16,altern:[14,16,18],although:18,alwai:14,amp:17,ani:[0,1,4,6,7,9,12,16,17,19],anoth:15,anyth:[11,19],anytim:19,api:[10,14,18],appl:14,appli:[0,12,15],applic:[7,12,14,15,17],approxim:0,architectur:[3,12,14,18,19],architur:6,arg:[0,1,3,4,5,12],arg_rout:[5,15],argument:12,art:[10,19],arxiv:0,asano:0,aspect:16,assum:[0,1,4,14],att_mask:[0,3,7,11,16],att_val:11,attend:[0,14],attent:[1,2,4,6,7,9,10,11,12,13,14,15],attention_mask:0,attention_mechanism_str:9,attention_nam:18,attention_pattern:16,attention_query_mask:[0,18],attentionconfig:[0,12],attentionmask:0,attn_drop:[9,14],attn_mask:[11,16],attribut:0,autograd:17,autom:14,automat:[6,12,19],avail:[4,9,17],awar:[0,3,16,17],backend:17,backpropag:15,backward_pass:5,ball:0,bar:[0,1,4],base:[0,1,3,4,6,7,9,10,12,13,16,18],basi:14,basic:14,batch:[0,3,11,12,14,18],batch_first:[11,14],batch_submit:12,becaus:14,becom:[15,18],befor:0,being:[0,11,17,19],below:14,benchmark:[8,12,14,17,19],benchmark_pytorch_transform:14,benchmark_triton_dropout:17,benchmark_triton_layernorm:17,benefit:15,better:[11,17],between:[9,11,15],bia:[3,14],bias:11,big:0,bigbird:0,binari:11,bird:0,bitmask:7,block:[5,6,8,10,11,12,13,19],block_config:15,block_factori:[7,9],block_siz:11,block_typ:[7,9,14],blockif:11,blockspars:11,blocksparseattent:[10,13],blocktyp:7,bonu:11,bookeep:11,bool:[0,1,3,4,5,7,9,12,15],both:[0,7,12],bruegger:15,build:[0,1,4,10,11,13,15,18,19],build_attent:[0,18],build_feedforward:1,build_model:14,build_positional_embed:4,built:[14,18],bypass:9,call:[0,1,4,12],campbel:0,can:[0,3,6,9,10,11,12,14,15,16,17,18,19],cannot:[0,14,19],capabl:[6,17],care:14,causal:[0,9,11,12,14],causal_layout:11,causal_mask:11,certain:0,chakraborti:0,chang:[6,11,14],check:[14,16],checkpo:12,checkpoint:15,child:16,choromanski:0,chosen:14,chunk:15,classmethod:[0,1,3,7,9],clear:16,clone:6,close:[14,15],closer:16,cluster:12,code:[6,12,17,18],codebas:0,coeffici:11,com:[0,6],combin:[0,10,15,18],commandlin:14,commod:11,common:6,commun:15,compar:[10,11,13,15,17,19],comparison:14,compat:[15,17],compil:[6,17],complet:[7,8,15,18],complex:0,compon:[0,1,3,4,5,7,10,11,12,15,16,18],compos:19,comprehens:6,comput:[0,6,11,15],conda:6,condit:6,config:[0,1,3,4,7,9,12,14],config_path:12,configur:[0,1,4,7,9,12],consid:[12,14,15,16],consolid:17,constant_mask:0,constitut:14,construct:[11,12,14],constructor:[12,14],contain:5,context:[9,15],conv_kernel_s:[0,12],convent:14,convert:11,correct:0,correspond:[9,17],cost:15,could:[11,14],coupl:[0,6,12,14,17],creat:[0,6,10],crop:0,cross:7,crowd:19,crucial:4,cuda:[10,11,16,17],current:[6,14,17],custom:[10,14],custom_decod:14,custom_encod:14,d_model:14,data:[11,18],dataclass:12,ddp:15,deal:15,declar:14,decod:[7,9,14],decoder_att_mask:7,decoder_input_mask:9,decoder_nystrom_favor:14,decor:[0,1,4],dedic:12,def:[11,12,15,16],defer:18,defin:[7,9,11,12,14,15,16,19],definit:[7,18],del:16,demonstr:14,dens:11,depend:[4,18],depth:16,design:19,detail:15,determin:[0,1,4],determinist:5,develop:8,devic:[0,11,14,18],dict:[0,1,4,7,9,18],dict_kei:14,differ:[11,12,14,15],dim:[3,15,16],dim_featur:0,dim_feedforward:14,dim_head:0,dim_kei:3,dim_model:[1,3,4,7,9,11,14,18],dim_valu:3,dimens:[0,3,7,11,14,17,18],directli:[12,14,17,18],dispatch:[3,18],distribut:[0,15],doc:14,doe:15,domain:19,don:14,done:12,dot:[0,6,14],drop:[0,11,14,17],dropout:[0,1,4,9,11,12,14,18],dtype:[0,11,14],dubei:0,dummi:[14,18],duplic:14,each:[0,7,17,19],earli:14,easi:19,easili:[9,14,18,19],effect:[9,15],effici:15,effort:19,either:[17,18],element:[0,14],emb:[3,9,11,14],embed:[2,9,10,14],embed_dim:16,empti:[0,11],empty_cach:11,enabl:[6,12,17],encod:[4,7,9,10,13],encoder_att_mask:7,encoder_config:14,encoder_input_mask:9,encoder_loc:14,encoder_random:14,encodinhg:14,end:3,engin:19,enough:[6,11],entir:14,enumer:7,env:6,equival:[10,13,14],error:14,evalu:14,even:[0,1,4,12],evenli:0,everi:[14,19],everyth:[14,18],exact:[12,14],exactli:15,exampl:[6,9,10,11,14,16,17],exchang:16,exempl:14,exhaust:16,exhibit:16,exist:[10,13,14],expect:[0,3,14,17,18],experi:16,explicit:14,explicitli:12,expos:[12,14,15,16,18],extend:[10,13,14,19],extens:[12,19],extra:[11,12,15,16],f_arg:[5,15],facebookresearch:0,fact:11,factori:[10,15],fairintern:6,fairli:14,fals:[0,3,5,7,9,12,14,15,16,17],famili:17,fast:[0,11,19],faster:17,favor:[0,14],favorattent:0,featur:[0,14],feature_map:0,feature_map_typ:0,featuremaptyp:0,feedforward:[2,7,10,14,15],feedforward_config:[7,9,14],feedforwardconfig:[1,7],feichtenhof:0,few:14,field:[12,19],file:[0,1,4,18],find:[0,1,4],fine:[11,18],first:[7,14,15],flag:18,flexibl:[10,14,19],float16:11,focu:19,focus:19,follow:[3,6,9,12,14,15,16,17,19],foo:[0,1,4],force_spars:0,forget:14,fork:12,formul:15,forward:[0,1,3,4,5,7,9,11,12,14,15],fp16:17,free:[14,15],friendli:14,from:[0,1,4,6,10,11,12,13,14,15,17,18],from_bool:0,from_config:[0,1,3,4,7,9,14],from_multipl:0,full:[9,10,13],fullfil:6,fung:0,fusedlayernorm:14,fusedlinearlay:17,fusedmlp:9,futur:[0,14],g_arg:[5,15],gcc:6,gelu:9,gener:[9,14],get:[11,15,16,17],get_reversible_lay:7,git:6,github:[0,6],given:[0,1,4,9,12,16,18,19],global:0,globalattent:0,glr:17,goal:17,gomez:15,good:16,gpt:4,gpu:[6,15,17],grain:11,gross:15,guruganesh:0,half:11,happen:19,has:[0,14],have:[11,14,16],head:[0,2,10,11,14,15,18],head_:11,heavi:19,help:15,helper:[0,9,11,15,16,18],henriqu:0,here:[0,10,11,13,14],hidden_layer_multipli:[1,9,14],hierarchi:14,hoc:17,hold:0,hopefulli:18,host:[10,13],how:[16,17],html:17,http:[0,17],idea:16,ideal:19,ignor:0,imag:16,img_siz:16,implement:[0,4,6,7,14,15],impli:0,improv:[9,19],in_featur:[14,17],in_proj_contain:[3,14],includ:[9,14,15],increas:[15,17],independ:6,inf:0,inform:12,inherit:12,initi:18,inplac:14,inprojcontain:[3,14],input:[1,3,14,15,18],input_mask:7,insight:4,inspir:[4,19],instal:6,instanc:[0,1,4,7,9,12],instanti:[0,1,4,14,18],interest:[10,13,14],interfac:[12,14,17],intern:18,interoper:[10,19],inv_iter:[0,12],is_caus:0,is_first:7,is_last:7,is_spars:0,isinst:16,issu:6,iter_before_redraw:0,itself:[0,1,4],jit:17,job:[12,14],json:12,just:[11,14,16,17],kaiser:15,keep:[0,14],kei:[0,1,3,4,11],kept:0,kernel:[0,10,17],key_padding_mask:[0,3],kitaev:15,knob:14,kwarg:[0,1,3,4,5,7,11,12,15],label:0,landmark_pool:[0,12],landmark_select:0,landmarkselect:0,lang:17,languag:[9,17],laptop:17,larg:15,last:[7,17],launch:14,layer:[2,7,9,10,13,15],layer_norm_ep:14,layer_norm_styl:[7,9,14],layer_posit:7,layernorm:16,layernormstyl:7,layerposit:7,layerpositionbitmask:7,layout:11,lead:14,least:12,length:[0,3,11],less:[6,15],let:[11,12,14,16],leverag:14,levskaya:15,librari:[0,1,4,10,14,19],lightli:15,like:[12,14,15,16,17,18],limit:[6,11,17],line:[11,17],linear:[0,14],linform:[0,14],linformerattent:0,list:[9,14],littl:[14,18],load:6,local:[0,12,14,17,19],localattent:[0,14],log:[12,17],log_softmax:17,longer:0,longform:0,look:[11,14],loos:12,loss:14,lot:[14,18],lower:11,lra:[12,14],lsh:15,lucidrain:15,machin:6,made:15,mai:[14,16],main:15,make:[3,11,14,15,17,18],make_caus:0,make_crop:0,mani:[14,17],manual:16,map:0,mark:7,mark_not_first:7,mark_not_last:7,mask:[0,3,6,7,11,14,16,18],match:[6,11],matric:4,matrix:11,max_memori:11,max_memory_alloc:11,maxpool:11,maybe_merge_mask:0,mean:[0,14,15,19],measur:[17,19],mechan:[2,3,7,10,12,13,14,16],mem_us:11,memori:[0,7,11,14,15],merg:0,met:6,method:[0,4],metz:0,mha:[14,15],mind:[11,16],minim:[14,16],minimum:11,misra:0,mlp:[1,9,14,15],mlp_drop:9,mlp_multipli:9,mlp_ratio:16,mlpen:0,model:[6,8,10,13,15,18,19],model_factori:[9,14,15],modul:[0,1,3,4,5,6,7,9,12,15,16],module_output:16,modulelist:[5,14,15],monkei:16,more:[11,12,14,15,16,18,19],moreov:15,mostli:14,motionform:0,move:19,multi:[0,2,10,15,18],multi_head:[11,18],multi_head_config:[7,9,14],multi_head_config_cross:[7,14],multi_head_config_mask:[7,14],multi_head_dispatch:3,multihead:[11,18],multiheadattent:11,multiheaddispatch:[3,11,14,18],multiheaddispatchconfig:3,multipl:[0,14,15],multirun:14,must:0,my_attent:0,my_component_nam:12,my_config:[14,18],my_fancy_mask:16,my_feedforward:1,my_linear_lay:17,my_model:14,my_position_encod:4,name:[0,1,4,6,9,12,14,16,18],named_children:16,natur:15,ndim:0,need:[0,3,6,11,12,14,15],neg:0,negat:14,neox:4,net:5,network:15,neurip:0,nhead:14,non:17,none:[0,1,3,7,9,12,14,17],norm:[7,14,15],norm_lay:16,normalize_input:0,notat:0,note:[7,11,14,15,16],notebook:16,noth:[6,7],now:[11,12,14,16],num_decoder_lay:14,num_encoder_lay:14,num_head:[0,3,9,11,12,14,16,18],num_landmark:[0,12],num_lay:[7,9,14,15],number:[0,15,17],nvcc:6,nvidia:[14,17],nystrom:[0,12,14],nystromattent:[0,12],nystromform:0,nystromselfattentionconfig:12,object:[0,7,9,14],obscur:18,odd:0,offer:14,often:6,one:[0,11,12,14,15,16,19],ones:11,onli:[0,6,9,10,13,17],ontanon:0,open:[12,15],oper:17,operand:17,opposit:14,optim:[10,17,19],option:[0,1,3,7,8,9,10,12,14,15],order:12,org:17,origin:[0,15],ortho:0,orthoform:0,orthoformerattent:0,orthogon:0,other:[0,4,12,14,15,16,17,19],our:[11,16],out:[10,11,13,14],out_featur:[14,17],out_proj:3,output:[0,3,9,15,16],over:17,overal:0,overrid:14,own:18,packag:14,pad:0,paper:[12,15],parallel:17,paramet:[0,14,16,18],part:[0,1,4,10,13,14],particular:[11,16],pass:[0,11,15],patch:16,patch_siz:16,path:[12,14,15,18],patrick:0,pattern:[0,11,16],peak:11,per:[11,14],perfect:11,perform:[0,17],permut:14,pham:0,pick:12,pinverse_original_init:[0,12],pip:6,pleas:[11,14,15,16],point:[12,14,17],pose_encod:14,posit:[0,2,7,9,10,14],position_embed:14,position_encoding_config:[7,9,14],positional_embed:[4,7],positionembed:4,positionembeddingconfig:[4,7],possibl:[9,11,14,17,18],post:[7,14],postnorm:14,power:11,practic:[12,16],pre:[7,9,14],precis:16,prefer:14,prenorm:14,present:6,press:9,primarili:8,primit:[14,17],print:[11,14],privat:12,probabl:[0,11,14],process:15,produc:15,product:[0,6,14],program:17,programat:[10,18],progress:12,proj:14,project:3,properti:0,propos:[0,3,9,14,15,16,17,19],provid:[0,6,11,17,18],pure:[14,17],purpos:8,put:14,pytest:12,python3:[12,14,17],python:[6,14,17],pytorch:[10,11,13,16,17],pytorch_multihead:11,pytorchtransform:14,qkv:16,qkv_bia:16,queri:[0,3,4,11],quit:14,rand:[14,18],randn:11,random:[0,11],randomattent:[0,14],randomli:0,ratio:0,ravula:0,readm:12,realli:[11,14,19],recipi:6,recommend:12,record_rng:5,recov:15,recurs:16,redraw:0,refer:[0,10,16,19],reform:15,regist:[0,1,4,12],register_attent:[0,12],register_feedforward:1,register_positional_embed:4,registr:12,rel:4,relat:[6,15],relev:[12,19],relu:[14,17],remark:12,remind:12,remov:11,ren:15,repeat:14,replac:[10,13,14,17],replace_attn_with_xformers_on:16,replic:14,repo:[4,19],report:11,repositori:[15,16],repres:0,reproduc:17,requir:[11,12,15],requires_grad:11,requires_head_dimens:18,res_drop:9,reset_peak_memory_stat:11,resid_drop:14,residu:[7,14,15],residual_dropout:[3,9,11,14,18],respons:11,result:[11,14,17],rethink:0,reus:[16,19],revers:[2,7,9,10,13,14],reversibleblock:[5,15],reversiblesequ:[5,15],robin:15,roform:4,rotari:4,rotaryembed:4,rotat:4,round:11,rout:15,routingtransform:0,run:[11,14,17],run_task:12,runtim:[6,14],sai:16,said:14,same:[0,12,14,15],save:[14,15],scale:[0,6,14],scaleddotproduct:[0,16],search:[18,19],see:[0,1,4,6,14,15],self:[0,1,3,11,12,15],sens:14,septemb:17,seq:[11,14,18],seq_len:[0,4,9,11,14,18],sequenc:[0,3,11,14,15,17,18],sequenti:[14,15],serial:9,serv:17,set:[0,6,7,14,15],set_rng:5,setup:6,sever:16,shape:[0,14,16],share:[9,12],should:[0,14,15,18],show:16,side:0,sigmoid:17,similar:[14,17,18],similarli:[14,15],simpl:11,simpli:17,sinc:19,sinepositionalembed:4,singh:0,size:[0,3,11],skip:17,slide:0,slow:6,slurm:12,sm_reg:0,small:11,smreg:0,snipper:16,snippet:12,some:[6,10,11,14,15,16,17,18],somebodi:19,someth:[11,12,14,15,18],sourc:[0,1,3,4,5,6,7,9,16,19],space:0,spars:[0,10,11,13],sparsifi:16,sparsiti:16,specif:[6,7,19],speed:14,sphx:17,split_dim:5,sputnik:6,squared_relu:17,src:[9,14],stack:[9,14,15],stack_config:[9,14],stand:0,start:[11,14,17],state:[10,19],step:[0,14],still:11,stop:11,store:15,str:[0,1,4,7,9],straightforward:18,structur:[7,9],studi:19,sub:0,subclass:[0,1,4],sublay:14,submit:12,subsample_fract:0,suggest:6,support:[6,14,16,17],suppos:16,sure:18,sweep:[14,18],synchron:11,systemat:14,take:[15,16,18],taken:14,tan:0,target:7,task:12,tensor:[0,1,3,4,5,7,9,12,14,15,16,17],term:7,test:[9,10,12,13,14,19],tgt:[9,14],than:[6,11,14,15,17],thei:[6,8,10],them:[3,12,15,17],thi:[0,1,3,4,7,9,11,12,14,15,16,17,18,19],thing:12,think:14,three:12,through:19,throughput:17,tie_embedding_weight:9,ties:12,tile:11,time:[0,11,14,17],timm:16,timmattentionwrapp:16,titl:11,to_bool:0,to_seq_len:0,too:19,tool:12,toolbox:12,toolchain:17,top:[7,14],torch:[0,1,3,4,5,7,9,11,12,14,15,16,17,18],torch_cuda_arch_list:6,toward:11,tradeoff:15,train:[0,1,3,4,5,7,9,14],trajectori:0,tranform:[14,17],transform:[0,4,7,9,10,16,17,19],transformerencoderlay:14,translat:16,transpar:6,triangular:11,trigger:[6,12],tril:11,triton:[9,10,11,13,14],tupl:[4,7],turn:[9,14,15,18],tutori:[6,10,14,17],two:[11,15,17,18],txt:6,type:[0,12,14],typic:[0,16,17],underli:0,union:[0,1,4,9,15],unit:[12,14,17],unload:6,unrel:15,urtasun:15,use:[6,11,14,15,16,17,18],use_razavi_pinvers:[0,12],use_rotary_embed:[3,9],use_separate_proj_weight:3,use_triton:7,usecas:17,used:[0,1,3,4,6,12,14,16,17],useful:12,uses:[11,14],using:[0,6,9,15,17],util:0,v100:[11,14,17],v_skip_connect:[0,12],valu:[0,3,6,7,11,14,19],vanilla:[7,14],vari:3,variabl:6,variant:[12,19],variat:16,vaswani:[0,3,14,15],vedaldi:0,veri:[14,15,17,18],verifi:15,version:6,via:[0,15],video:0,view:0,visibl:6,vision_transform:16,visiontransform:16,vit:[10,13],vocab:[9,14],vocab_s:[4,9,14],vocabembed:[4,14],wai:14,walk:14,wang:0,want:[6,12,16],warn:[0,6],weight:[9,16],welcom:19,well:[3,16],were:8,what:[0,1,4,14],whatev:14,when:[6,14,15,16,17],where:11,wherea:14,whether:[15,18],which:[0,1,4,6,10,11,12,14,15,16,17,18,19],whole:14,whose:0,window:0,window_s:0,without:15,word_embed:14,work:[12,16,18],world_siz:12,worth:14,would:[12,14,16,18],wrap:[3,15],wrap_att:14,wrap_ff:14,xformer:[0,1,3,4,5,6,7,9,11,13,15,16,17,18],xformer_config:9,xformer_env:6,xformerblockconfig:[7,9],xformerconfig:[9,14],xformerdecoderblock:7,xformerdecoderconfig:[7,15],xformerencoderblock:[7,14],xformerencoderconfig:[7,14,15],xformerstackconfig:15,xiong:0,yang:0,yet:[7,15],you:[0,3,6,11,12,14,15,16,17,18,19],your:[0,12,14,15,18],zaheer:0,zeng:0,zero:0,zoo:[10,13,19]},titles:["Attention mechanisms","Feedforward mechanisms","API Reference","Multi Head Attention","Position Embeddings","Reversible layer","Custom parts reference","Block factory","Factory","Model factory","Welcome to xFormers\u2019s documentation!","Using BlockSparseAttention","Extend the xFormers parts zoo","Tutorials","Building an encoder, comparing to PyTorch","Using the Reversible block","Replace all attentions from an existing ViT model with a sparse equivalent?","Using Triton-based layers","I\u2019m only interested in testing out the attention mechanisms that are hosted here","What is xFormers?"],titleterms:{Using:[11,15,17],activ:17,all:16,api:2,attent:[0,3,16,18],base:17,bia:17,block:[7,14,15],blocksparseattent:11,build:[6,14],compar:14,cuda:6,custom:6,document:10,dropout:17,embed:4,encod:14,equival:16,exist:16,extend:12,factori:[7,8,9,14],feedforward:1,from:16,full:14,fuse:17,head:3,here:18,host:18,hydra:14,interest:18,intro:15,kernel:6,layer:[5,14,17],linear:17,mechan:[0,1,18],model:[9,14,16],multi:3,norm:17,onli:18,out:18,part:[6,12],posit:4,possibl:6,practic:15,pytorch:14,refer:[2,6],replac:16,requir:6,revers:[5,15],softmax:17,spars:[6,16],test:18,transform:[14,15],triton:[6,17],tutori:13,usag:6,vit:16,warn:14,welcom:10,what:19,xformer:[10,12,14,19],zoo:12}})