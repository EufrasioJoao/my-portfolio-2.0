// ============================================
// BALALPAY - ENUMS
// ============================================

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
  FORNECEDOR = "FORNECEDOR",
  AFILIADO = "AFILIADO",
}

export enum FornecedorStatus {
  ATIVO = "ATIVO",
  INATIVO = "INATIVO",
  SUSPENSO = "SUSPENSO",
}

export enum ProdutoStatus {
  DISPONIVEL = "DISPONIVEL",
  INDISPONIVEL = "INDISPONIVEL",
  ESGOTADO = "ESGOTADO",
}

export enum AfiliadoStatus {
  ATIVO = "ATIVO",
  INATIVO = "INATIVO",
  SUSPENSO = "SUSPENSO",
}

export enum PedidoStatus {
  PENDENTE = "PENDENTE",
  EM_PREPARACAO = "EM_PREPARACAO",
  SAIU_PARA_ENTREGA = "SAIU_PARA_ENTREGA",
  ENTREGUE = "ENTREGUE",
  CANCELADO = "CANCELADO",
}

export enum MetodoPagamento {
  PAGAMENTO_NA_ENTREGA = "PAGAMENTO_NA_ENTREGA",
}

export enum LevantamentoStatus {
  PENDENTE = "PENDENTE",
  APROVADO = "APROVADO",
  REJEITADO = "REJEITADO",
}

export enum TipoMidia {
  FOTO = "FOTO",
  VIDEO = "VIDEO",
}

// ============================================
// BALALPAY - INTERFACES
// ============================================

export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string;
  coverImage?: string;
  role: UserRole;
  bio?: string;
  deletedAt?: Date;
  createdAt: Date | string;
  updatedAt: Date;
}

export interface Fornecedor {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  endereco?: string;
  descricao?: string;
  status: FornecedorStatus;
  produtos?: Produto[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  comissao_percentual: number;
  imagem_principal?: string;
  status: ProdutoStatus;
  estoque: number;
  fornecedorId: string;
  fornecedor?: Fornecedor;
  midias?: ProdutoMidia[];
  afiliacoes?: Afiliacao[];
  pedidos?: Pedido[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface ProdutoMidia {
  id: string;
  url: string;
  tipo: TipoMidia;
  ordem: number;
  produtoId: string;
  produto?: Produto;
  createdAt: Date;
  updatedAt: Date;
}

export interface Afiliado {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  whatsapp: string;
  status: AfiliadoStatus;
  saldo_disponivel: number;
  banco?: string;
  numero_conta?: string;
  titular_conta?: string;
  userId?: string;
  user?: User;
  afiliacoes?: Afiliacao[];
  pedidos?: Pedido[];
  comissoes?: Comissao[];
  levantamentos?: Levantamento[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface Afiliacao {
  id: string;
  link_exclusivo: string;
  afiliadoId: string;
  afiliado?: Afiliado;
  produtoId: string;
  produto?: Produto;
  pedidos?: Pedido[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Pedido {
  id: string;
  numero_pedido: string;
  cliente_nome: string;
  cliente_telefone: string;
  cliente_provincia: string;
  cliente_cidade: string;
  cliente_bairro: string;
  cliente_referencia: string;
  cliente_observacoes?: string;
  metodo_pagamento: MetodoPagamento;
  status: PedidoStatus;
  valor_produto: number;
  valor_comissao: number;
  produtoId: string;
  produto?: Produto;
  afiliadoId: string;
  afiliado?: Afiliado;
  afiliacaoId: string;
  afiliacao?: Afiliacao;
  comissao?: Comissao;
  data_pedido: Date;
  data_preparacao?: Date;
  data_saida_entrega?: Date;
  data_entrega?: Date;
  data_cancelamento?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comissao {
  id: string;
  valor: number;
  liberada: boolean;
  pedidoId: string;
  pedido?: Pedido;
  afiliadoId: string;
  afiliado?: Afiliado;
  data_liberacao?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Levantamento {
  id: string;
  valor: number;
  status: LevantamentoStatus;
  banco: string;
  numero_conta: string;
  titular_conta: string;
  afiliadoId: string;
  afiliado?: Afiliado;
  aprovado_por?: string;
  aprovado_em?: Date;
  observacoes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================
// BALALPAY - DTOs (Data Transfer Objects)
// ============================================

export interface CreateFornecedorDTO {
  nome: string;
  email: string;
  telefone: string;
  endereco?: string;
  descricao?: string;
}

export interface UpdateFornecedorDTO {
  nome?: string;
  telefone?: string;
  endereco?: string;
  descricao?: string;
  status?: FornecedorStatus;
}

export interface CreateProdutoDTO {
  nome: string;
  descricao: string;
  preco: number;
  comissao_percentual: number;
  imagem_principal?: string;
  estoque: number;
  fornecedorId: string;
}

export interface UpdateProdutoDTO {
  nome?: string;
  descricao?: string;
  preco?: number;
  comissao_percentual?: number;
  imagem_principal?: string;
  status?: ProdutoStatus;
  estoque?: number;
}

export interface CreateProdutoMidiaDTO {
  url: string;
  tipo: TipoMidia;
  ordem: number;
  produtoId: string;
}

export interface CreateAfiliadoDTO {
  nome: string;
  email: string;
  telefone: string;
  whatsapp: string;
  userId?: string;
}

export interface UpdateAfiliadoDTO {
  nome?: string;
  telefone?: string;
  whatsapp?: string;
  banco?: string;
  numero_conta?: string;
  titular_conta?: string;
  status?: AfiliadoStatus;
}

export interface CreateAfiliacaoDTO {
  afiliadoId: string;
  produtoId: string;
}

export interface CreatePedidoDTO {
  cliente_nome: string;
  cliente_telefone: string;
  cliente_provincia: string;
  cliente_cidade: string;
  cliente_bairro: string;
  cliente_referencia: string;
  cliente_observacoes?: string;
  produtoId: string;
  afiliadoId: string;
  afiliacaoId: string;
}

export interface UpdatePedidoStatusDTO {
  status: PedidoStatus;
}

export interface CreateLevantamentoDTO {
  valor: number;
  banco: string;
  numero_conta: string;
  titular_conta: string;
  afiliadoId: string;
}

export interface AprovarLevantamentoDTO {
  aprovado_por: string;
  observacoes?: string;
}

// ============================================
// BALALPAY - RESPONSE TYPES
// ============================================

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface DashboardStats {
  total_vendas: number;
  vendas_pendentes: number;
  vendas_entregues: number;
  receita_total: number;
  comissao_total: number;
  produtos_ativos: number;
  afiliados_ativos: number;
}

export interface AfiliadoDashboardStats {
  total_vendas: number;
  vendas_pendentes: number;
  vendas_entregues: number;
  comissao_total: number;
  comissao_liberada: number;
  comissao_pendente: number;
  saldo_disponivel: number;
  produtos_afiliados: number;
}

export interface FornecedorDashboardStats {
  total_produtos: number;
  produtos_ativos: number;
  total_vendas: number;
  vendas_pendentes: number;
  vendas_entregues: number;
  receita_total: number;
  afiliados_vendendo: number;
}