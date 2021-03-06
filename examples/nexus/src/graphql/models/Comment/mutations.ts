import { schema } from 'nexus'

schema.extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createOneComment', {
      type: 'Comment',
      nullable: false,
      args: {
        data: schema.arg({
          type: 'CommentCreateInput',
          nullable: false,
        }),
      },
      resolve(_parent, { data }, { prisma, select }) {
        return prisma.comment.create({
          data,
          ...select,
        })
      },
    })

    t.field('updateOneComment', {
      type: 'Comment',
      nullable: false,
      args: {
        where: schema.arg({
          type: 'CommentWhereUniqueInput',
          nullable: false,
        }),
        data: schema.arg({
          type: 'CommentUpdateInput',
          nullable: false,
        }),
      },
      resolve(_parent, { data, where }, { prisma, select }) {
        return prisma.comment.update({
          data,
          where,
          ...select,
        })
      },
    })

    t.field('deleteOneComment', {
      type: 'Comment',
      nullable: true,
      args: {
        where: schema.arg({
          type: 'CommentWhereUniqueInput',
          nullable: false,
        }),
      },
      resolve: async (_parent, { where }, { prisma, select }) => {
        return prisma.comment.delete({
          where,
          ...select,
        })
      },
    })

    t.field('deleteManyComment', {
      type: 'BatchPayload',
      args: {
        where: schema.arg({
          type: 'CommentWhereInput',
          nullable: true,
        }),
      },
      resolve: async (_parent, { where }, { prisma }) => {
        return prisma.comment.deleteMany({ where })
      },
    })

    t.field('updateManyComment', {
      type: 'BatchPayload',
      args: {
        where: schema.arg({
          type: 'CommentWhereInput',
          nullable: true,
        }),
        data: schema.arg({
          type: 'CommentUpdateManyMutationInput',
          nullable: false,
        }),
      },
      resolve(_parent, args, { prisma }) {
        return prisma.comment.updateMany(args)
      },
    })
  },
})
