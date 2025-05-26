
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model FileType
 * 
 */
export type FileType = $Result.DefaultSelection<Prisma.$FileTypePayload>
/**
 * Model FileBuild
 * 
 */
export type FileBuild = $Result.DefaultSelection<Prisma.$FileBuildPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FileTypes
 * const fileTypes = await prisma.fileType.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more FileTypes
   * const fileTypes = await prisma.fileType.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.fileType`: Exposes CRUD operations for the **FileType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileTypes
    * const fileTypes = await prisma.fileType.findMany()
    * ```
    */
  get fileType(): Prisma.FileTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fileBuild`: Exposes CRUD operations for the **FileBuild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileBuilds
    * const fileBuilds = await prisma.fileBuild.findMany()
    * ```
    */
  get fileBuild(): Prisma.FileBuildDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    FileType: 'FileType',
    FileBuild: 'FileBuild'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "fileType" | "fileBuild"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FileType: {
        payload: Prisma.$FileTypePayload<ExtArgs>
        fields: Prisma.FileTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTypePayload>
          }
          findFirst: {
            args: Prisma.FileTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTypePayload>
          }
          findMany: {
            args: Prisma.FileTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTypePayload>[]
          }
          create: {
            args: Prisma.FileTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTypePayload>
          }
          createMany: {
            args: Prisma.FileTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTypePayload>[]
          }
          delete: {
            args: Prisma.FileTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTypePayload>
          }
          update: {
            args: Prisma.FileTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTypePayload>
          }
          deleteMany: {
            args: Prisma.FileTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTypePayload>[]
          }
          upsert: {
            args: Prisma.FileTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileTypePayload>
          }
          aggregate: {
            args: Prisma.FileTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileType>
          }
          groupBy: {
            args: Prisma.FileTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileTypeCountArgs<ExtArgs>
            result: $Utils.Optional<FileTypeCountAggregateOutputType> | number
          }
        }
      }
      FileBuild: {
        payload: Prisma.$FileBuildPayload<ExtArgs>
        fields: Prisma.FileBuildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileBuildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileBuildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileBuildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileBuildPayload>
          }
          findFirst: {
            args: Prisma.FileBuildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileBuildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileBuildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileBuildPayload>
          }
          findMany: {
            args: Prisma.FileBuildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileBuildPayload>[]
          }
          create: {
            args: Prisma.FileBuildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileBuildPayload>
          }
          createMany: {
            args: Prisma.FileBuildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileBuildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileBuildPayload>[]
          }
          delete: {
            args: Prisma.FileBuildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileBuildPayload>
          }
          update: {
            args: Prisma.FileBuildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileBuildPayload>
          }
          deleteMany: {
            args: Prisma.FileBuildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileBuildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileBuildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileBuildPayload>[]
          }
          upsert: {
            args: Prisma.FileBuildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileBuildPayload>
          }
          aggregate: {
            args: Prisma.FileBuildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileBuild>
          }
          groupBy: {
            args: Prisma.FileBuildGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileBuildGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileBuildCountArgs<ExtArgs>
            result: $Utils.Optional<FileBuildCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    fileType?: FileTypeOmit
    fileBuild?: FileBuildOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FileTypeCountOutputType
   */

  export type FileTypeCountOutputType = {
    builds: number
  }

  export type FileTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    builds?: boolean | FileTypeCountOutputTypeCountBuildsArgs
  }

  // Custom InputTypes
  /**
   * FileTypeCountOutputType without action
   */
  export type FileTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileTypeCountOutputType
     */
    select?: FileTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FileTypeCountOutputType without action
   */
  export type FileTypeCountOutputTypeCountBuildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileBuildWhereInput
  }


  /**
   * Models
   */

  /**
   * Model FileType
   */

  export type AggregateFileType = {
    _count: FileTypeCountAggregateOutputType | null
    _avg: FileTypeAvgAggregateOutputType | null
    _sum: FileTypeSumAggregateOutputType | null
    _min: FileTypeMinAggregateOutputType | null
    _max: FileTypeMaxAggregateOutputType | null
  }

  export type FileTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type FileTypeSumAggregateOutputType = {
    id: number | null
  }

  export type FileTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: boolean | null
  }

  export type FileTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: boolean | null
  }

  export type FileTypeCountAggregateOutputType = {
    id: number
    name: number
    status: number
    _all: number
  }


  export type FileTypeAvgAggregateInputType = {
    id?: true
  }

  export type FileTypeSumAggregateInputType = {
    id?: true
  }

  export type FileTypeMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
  }

  export type FileTypeMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
  }

  export type FileTypeCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    _all?: true
  }

  export type FileTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileType to aggregate.
     */
    where?: FileTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileTypes to fetch.
     */
    orderBy?: FileTypeOrderByWithRelationInput | FileTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileTypes
    **/
    _count?: true | FileTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileTypeMaxAggregateInputType
  }

  export type GetFileTypeAggregateType<T extends FileTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateFileType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileType[P]>
      : GetScalarType<T[P], AggregateFileType[P]>
  }




  export type FileTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileTypeWhereInput
    orderBy?: FileTypeOrderByWithAggregationInput | FileTypeOrderByWithAggregationInput[]
    by: FileTypeScalarFieldEnum[] | FileTypeScalarFieldEnum
    having?: FileTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileTypeCountAggregateInputType | true
    _avg?: FileTypeAvgAggregateInputType
    _sum?: FileTypeSumAggregateInputType
    _min?: FileTypeMinAggregateInputType
    _max?: FileTypeMaxAggregateInputType
  }

  export type FileTypeGroupByOutputType = {
    id: number
    name: string
    status: boolean
    _count: FileTypeCountAggregateOutputType | null
    _avg: FileTypeAvgAggregateOutputType | null
    _sum: FileTypeSumAggregateOutputType | null
    _min: FileTypeMinAggregateOutputType | null
    _max: FileTypeMaxAggregateOutputType | null
  }

  type GetFileTypeGroupByPayload<T extends FileTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileTypeGroupByOutputType[P]>
            : GetScalarType<T[P], FileTypeGroupByOutputType[P]>
        }
      >
    >


  export type FileTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    builds?: boolean | FileType$buildsArgs<ExtArgs>
    _count?: boolean | FileTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileType"]>

  export type FileTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
  }, ExtArgs["result"]["fileType"]>

  export type FileTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
  }, ExtArgs["result"]["fileType"]>

  export type FileTypeSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
  }

  export type FileTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status", ExtArgs["result"]["fileType"]>
  export type FileTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    builds?: boolean | FileType$buildsArgs<ExtArgs>
    _count?: boolean | FileTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FileTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FileTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FileTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileType"
    objects: {
      builds: Prisma.$FileBuildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      status: boolean
    }, ExtArgs["result"]["fileType"]>
    composites: {}
  }

  type FileTypeGetPayload<S extends boolean | null | undefined | FileTypeDefaultArgs> = $Result.GetResult<Prisma.$FileTypePayload, S>

  type FileTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileTypeCountAggregateInputType | true
    }

  export interface FileTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileType'], meta: { name: 'FileType' } }
    /**
     * Find zero or one FileType that matches the filter.
     * @param {FileTypeFindUniqueArgs} args - Arguments to find a FileType
     * @example
     * // Get one FileType
     * const fileType = await prisma.fileType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileTypeFindUniqueArgs>(args: SelectSubset<T, FileTypeFindUniqueArgs<ExtArgs>>): Prisma__FileTypeClient<$Result.GetResult<Prisma.$FileTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileTypeFindUniqueOrThrowArgs} args - Arguments to find a FileType
     * @example
     * // Get one FileType
     * const fileType = await prisma.fileType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, FileTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileTypeClient<$Result.GetResult<Prisma.$FileTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileTypeFindFirstArgs} args - Arguments to find a FileType
     * @example
     * // Get one FileType
     * const fileType = await prisma.fileType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileTypeFindFirstArgs>(args?: SelectSubset<T, FileTypeFindFirstArgs<ExtArgs>>): Prisma__FileTypeClient<$Result.GetResult<Prisma.$FileTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileTypeFindFirstOrThrowArgs} args - Arguments to find a FileType
     * @example
     * // Get one FileType
     * const fileType = await prisma.fileType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, FileTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileTypeClient<$Result.GetResult<Prisma.$FileTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileTypes
     * const fileTypes = await prisma.fileType.findMany()
     * 
     * // Get first 10 FileTypes
     * const fileTypes = await prisma.fileType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileTypeWithIdOnly = await prisma.fileType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileTypeFindManyArgs>(args?: SelectSubset<T, FileTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileType.
     * @param {FileTypeCreateArgs} args - Arguments to create a FileType.
     * @example
     * // Create one FileType
     * const FileType = await prisma.fileType.create({
     *   data: {
     *     // ... data to create a FileType
     *   }
     * })
     * 
     */
    create<T extends FileTypeCreateArgs>(args: SelectSubset<T, FileTypeCreateArgs<ExtArgs>>): Prisma__FileTypeClient<$Result.GetResult<Prisma.$FileTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileTypes.
     * @param {FileTypeCreateManyArgs} args - Arguments to create many FileTypes.
     * @example
     * // Create many FileTypes
     * const fileType = await prisma.fileType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileTypeCreateManyArgs>(args?: SelectSubset<T, FileTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileTypes and returns the data saved in the database.
     * @param {FileTypeCreateManyAndReturnArgs} args - Arguments to create many FileTypes.
     * @example
     * // Create many FileTypes
     * const fileType = await prisma.fileType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileTypes and only return the `id`
     * const fileTypeWithIdOnly = await prisma.fileType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, FileTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileType.
     * @param {FileTypeDeleteArgs} args - Arguments to delete one FileType.
     * @example
     * // Delete one FileType
     * const FileType = await prisma.fileType.delete({
     *   where: {
     *     // ... filter to delete one FileType
     *   }
     * })
     * 
     */
    delete<T extends FileTypeDeleteArgs>(args: SelectSubset<T, FileTypeDeleteArgs<ExtArgs>>): Prisma__FileTypeClient<$Result.GetResult<Prisma.$FileTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileType.
     * @param {FileTypeUpdateArgs} args - Arguments to update one FileType.
     * @example
     * // Update one FileType
     * const fileType = await prisma.fileType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileTypeUpdateArgs>(args: SelectSubset<T, FileTypeUpdateArgs<ExtArgs>>): Prisma__FileTypeClient<$Result.GetResult<Prisma.$FileTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileTypes.
     * @param {FileTypeDeleteManyArgs} args - Arguments to filter FileTypes to delete.
     * @example
     * // Delete a few FileTypes
     * const { count } = await prisma.fileType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileTypeDeleteManyArgs>(args?: SelectSubset<T, FileTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileTypes
     * const fileType = await prisma.fileType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileTypeUpdateManyArgs>(args: SelectSubset<T, FileTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileTypes and returns the data updated in the database.
     * @param {FileTypeUpdateManyAndReturnArgs} args - Arguments to update many FileTypes.
     * @example
     * // Update many FileTypes
     * const fileType = await prisma.fileType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileTypes and only return the `id`
     * const fileTypeWithIdOnly = await prisma.fileType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FileTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, FileTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileType.
     * @param {FileTypeUpsertArgs} args - Arguments to update or create a FileType.
     * @example
     * // Update or create a FileType
     * const fileType = await prisma.fileType.upsert({
     *   create: {
     *     // ... data to create a FileType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileType we want to update
     *   }
     * })
     */
    upsert<T extends FileTypeUpsertArgs>(args: SelectSubset<T, FileTypeUpsertArgs<ExtArgs>>): Prisma__FileTypeClient<$Result.GetResult<Prisma.$FileTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileTypeCountArgs} args - Arguments to filter FileTypes to count.
     * @example
     * // Count the number of FileTypes
     * const count = await prisma.fileType.count({
     *   where: {
     *     // ... the filter for the FileTypes we want to count
     *   }
     * })
    **/
    count<T extends FileTypeCountArgs>(
      args?: Subset<T, FileTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileTypeAggregateArgs>(args: Subset<T, FileTypeAggregateArgs>): Prisma.PrismaPromise<GetFileTypeAggregateType<T>>

    /**
     * Group by FileType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileTypeGroupByArgs['orderBy'] }
        : { orderBy?: FileTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileType model
   */
  readonly fields: FileTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    builds<T extends FileType$buildsArgs<ExtArgs> = {}>(args?: Subset<T, FileType$buildsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileBuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FileType model
   */
  interface FileTypeFieldRefs {
    readonly id: FieldRef<"FileType", 'Int'>
    readonly name: FieldRef<"FileType", 'String'>
    readonly status: FieldRef<"FileType", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * FileType findUnique
   */
  export type FileTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileType
     */
    select?: FileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileType
     */
    omit?: FileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTypeInclude<ExtArgs> | null
    /**
     * Filter, which FileType to fetch.
     */
    where: FileTypeWhereUniqueInput
  }

  /**
   * FileType findUniqueOrThrow
   */
  export type FileTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileType
     */
    select?: FileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileType
     */
    omit?: FileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTypeInclude<ExtArgs> | null
    /**
     * Filter, which FileType to fetch.
     */
    where: FileTypeWhereUniqueInput
  }

  /**
   * FileType findFirst
   */
  export type FileTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileType
     */
    select?: FileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileType
     */
    omit?: FileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTypeInclude<ExtArgs> | null
    /**
     * Filter, which FileType to fetch.
     */
    where?: FileTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileTypes to fetch.
     */
    orderBy?: FileTypeOrderByWithRelationInput | FileTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileTypes.
     */
    cursor?: FileTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileTypes.
     */
    distinct?: FileTypeScalarFieldEnum | FileTypeScalarFieldEnum[]
  }

  /**
   * FileType findFirstOrThrow
   */
  export type FileTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileType
     */
    select?: FileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileType
     */
    omit?: FileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTypeInclude<ExtArgs> | null
    /**
     * Filter, which FileType to fetch.
     */
    where?: FileTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileTypes to fetch.
     */
    orderBy?: FileTypeOrderByWithRelationInput | FileTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileTypes.
     */
    cursor?: FileTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileTypes.
     */
    distinct?: FileTypeScalarFieldEnum | FileTypeScalarFieldEnum[]
  }

  /**
   * FileType findMany
   */
  export type FileTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileType
     */
    select?: FileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileType
     */
    omit?: FileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTypeInclude<ExtArgs> | null
    /**
     * Filter, which FileTypes to fetch.
     */
    where?: FileTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileTypes to fetch.
     */
    orderBy?: FileTypeOrderByWithRelationInput | FileTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileTypes.
     */
    cursor?: FileTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileTypes.
     */
    skip?: number
    distinct?: FileTypeScalarFieldEnum | FileTypeScalarFieldEnum[]
  }

  /**
   * FileType create
   */
  export type FileTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileType
     */
    select?: FileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileType
     */
    omit?: FileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a FileType.
     */
    data: XOR<FileTypeCreateInput, FileTypeUncheckedCreateInput>
  }

  /**
   * FileType createMany
   */
  export type FileTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileTypes.
     */
    data: FileTypeCreateManyInput | FileTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileType createManyAndReturn
   */
  export type FileTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileType
     */
    select?: FileTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileType
     */
    omit?: FileTypeOmit<ExtArgs> | null
    /**
     * The data used to create many FileTypes.
     */
    data: FileTypeCreateManyInput | FileTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileType update
   */
  export type FileTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileType
     */
    select?: FileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileType
     */
    omit?: FileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a FileType.
     */
    data: XOR<FileTypeUpdateInput, FileTypeUncheckedUpdateInput>
    /**
     * Choose, which FileType to update.
     */
    where: FileTypeWhereUniqueInput
  }

  /**
   * FileType updateMany
   */
  export type FileTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileTypes.
     */
    data: XOR<FileTypeUpdateManyMutationInput, FileTypeUncheckedUpdateManyInput>
    /**
     * Filter which FileTypes to update
     */
    where?: FileTypeWhereInput
    /**
     * Limit how many FileTypes to update.
     */
    limit?: number
  }

  /**
   * FileType updateManyAndReturn
   */
  export type FileTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileType
     */
    select?: FileTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileType
     */
    omit?: FileTypeOmit<ExtArgs> | null
    /**
     * The data used to update FileTypes.
     */
    data: XOR<FileTypeUpdateManyMutationInput, FileTypeUncheckedUpdateManyInput>
    /**
     * Filter which FileTypes to update
     */
    where?: FileTypeWhereInput
    /**
     * Limit how many FileTypes to update.
     */
    limit?: number
  }

  /**
   * FileType upsert
   */
  export type FileTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileType
     */
    select?: FileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileType
     */
    omit?: FileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the FileType to update in case it exists.
     */
    where: FileTypeWhereUniqueInput
    /**
     * In case the FileType found by the `where` argument doesn't exist, create a new FileType with this data.
     */
    create: XOR<FileTypeCreateInput, FileTypeUncheckedCreateInput>
    /**
     * In case the FileType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileTypeUpdateInput, FileTypeUncheckedUpdateInput>
  }

  /**
   * FileType delete
   */
  export type FileTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileType
     */
    select?: FileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileType
     */
    omit?: FileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTypeInclude<ExtArgs> | null
    /**
     * Filter which FileType to delete.
     */
    where: FileTypeWhereUniqueInput
  }

  /**
   * FileType deleteMany
   */
  export type FileTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileTypes to delete
     */
    where?: FileTypeWhereInput
    /**
     * Limit how many FileTypes to delete.
     */
    limit?: number
  }

  /**
   * FileType.builds
   */
  export type FileType$buildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileBuild
     */
    select?: FileBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileBuild
     */
    omit?: FileBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileBuildInclude<ExtArgs> | null
    where?: FileBuildWhereInput
    orderBy?: FileBuildOrderByWithRelationInput | FileBuildOrderByWithRelationInput[]
    cursor?: FileBuildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileBuildScalarFieldEnum | FileBuildScalarFieldEnum[]
  }

  /**
   * FileType without action
   */
  export type FileTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileType
     */
    select?: FileTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileType
     */
    omit?: FileTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileTypeInclude<ExtArgs> | null
  }


  /**
   * Model FileBuild
   */

  export type AggregateFileBuild = {
    _count: FileBuildCountAggregateOutputType | null
    _avg: FileBuildAvgAggregateOutputType | null
    _sum: FileBuildSumAggregateOutputType | null
    _min: FileBuildMinAggregateOutputType | null
    _max: FileBuildMaxAggregateOutputType | null
  }

  export type FileBuildAvgAggregateOutputType = {
    id: number | null
    numbers_created: number | null
    fileTypeId: number | null
  }

  export type FileBuildSumAggregateOutputType = {
    id: number | null
    numbers_created: number | null
    fileTypeId: number | null
  }

  export type FileBuildMinAggregateOutputType = {
    id: number | null
    fileName: string | null
    numbers_created: number | null
    fileTypeId: number | null
  }

  export type FileBuildMaxAggregateOutputType = {
    id: number | null
    fileName: string | null
    numbers_created: number | null
    fileTypeId: number | null
  }

  export type FileBuildCountAggregateOutputType = {
    id: number
    fileName: number
    numbers_created: number
    fileTypeId: number
    _all: number
  }


  export type FileBuildAvgAggregateInputType = {
    id?: true
    numbers_created?: true
    fileTypeId?: true
  }

  export type FileBuildSumAggregateInputType = {
    id?: true
    numbers_created?: true
    fileTypeId?: true
  }

  export type FileBuildMinAggregateInputType = {
    id?: true
    fileName?: true
    numbers_created?: true
    fileTypeId?: true
  }

  export type FileBuildMaxAggregateInputType = {
    id?: true
    fileName?: true
    numbers_created?: true
    fileTypeId?: true
  }

  export type FileBuildCountAggregateInputType = {
    id?: true
    fileName?: true
    numbers_created?: true
    fileTypeId?: true
    _all?: true
  }

  export type FileBuildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileBuild to aggregate.
     */
    where?: FileBuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileBuilds to fetch.
     */
    orderBy?: FileBuildOrderByWithRelationInput | FileBuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileBuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileBuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileBuilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileBuilds
    **/
    _count?: true | FileBuildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileBuildAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileBuildSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileBuildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileBuildMaxAggregateInputType
  }

  export type GetFileBuildAggregateType<T extends FileBuildAggregateArgs> = {
        [P in keyof T & keyof AggregateFileBuild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileBuild[P]>
      : GetScalarType<T[P], AggregateFileBuild[P]>
  }




  export type FileBuildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileBuildWhereInput
    orderBy?: FileBuildOrderByWithAggregationInput | FileBuildOrderByWithAggregationInput[]
    by: FileBuildScalarFieldEnum[] | FileBuildScalarFieldEnum
    having?: FileBuildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileBuildCountAggregateInputType | true
    _avg?: FileBuildAvgAggregateInputType
    _sum?: FileBuildSumAggregateInputType
    _min?: FileBuildMinAggregateInputType
    _max?: FileBuildMaxAggregateInputType
  }

  export type FileBuildGroupByOutputType = {
    id: number
    fileName: string
    numbers_created: number
    fileTypeId: number
    _count: FileBuildCountAggregateOutputType | null
    _avg: FileBuildAvgAggregateOutputType | null
    _sum: FileBuildSumAggregateOutputType | null
    _min: FileBuildMinAggregateOutputType | null
    _max: FileBuildMaxAggregateOutputType | null
  }

  type GetFileBuildGroupByPayload<T extends FileBuildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileBuildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileBuildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileBuildGroupByOutputType[P]>
            : GetScalarType<T[P], FileBuildGroupByOutputType[P]>
        }
      >
    >


  export type FileBuildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    numbers_created?: boolean
    fileTypeId?: boolean
    fileType?: boolean | FileTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileBuild"]>

  export type FileBuildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    numbers_created?: boolean
    fileTypeId?: boolean
    fileType?: boolean | FileTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileBuild"]>

  export type FileBuildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    numbers_created?: boolean
    fileTypeId?: boolean
    fileType?: boolean | FileTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileBuild"]>

  export type FileBuildSelectScalar = {
    id?: boolean
    fileName?: boolean
    numbers_created?: boolean
    fileTypeId?: boolean
  }

  export type FileBuildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "numbers_created" | "fileTypeId", ExtArgs["result"]["fileBuild"]>
  export type FileBuildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fileType?: boolean | FileTypeDefaultArgs<ExtArgs>
  }
  export type FileBuildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fileType?: boolean | FileTypeDefaultArgs<ExtArgs>
  }
  export type FileBuildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fileType?: boolean | FileTypeDefaultArgs<ExtArgs>
  }

  export type $FileBuildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileBuild"
    objects: {
      fileType: Prisma.$FileTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileName: string
      numbers_created: number
      fileTypeId: number
    }, ExtArgs["result"]["fileBuild"]>
    composites: {}
  }

  type FileBuildGetPayload<S extends boolean | null | undefined | FileBuildDefaultArgs> = $Result.GetResult<Prisma.$FileBuildPayload, S>

  type FileBuildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileBuildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileBuildCountAggregateInputType | true
    }

  export interface FileBuildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileBuild'], meta: { name: 'FileBuild' } }
    /**
     * Find zero or one FileBuild that matches the filter.
     * @param {FileBuildFindUniqueArgs} args - Arguments to find a FileBuild
     * @example
     * // Get one FileBuild
     * const fileBuild = await prisma.fileBuild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileBuildFindUniqueArgs>(args: SelectSubset<T, FileBuildFindUniqueArgs<ExtArgs>>): Prisma__FileBuildClient<$Result.GetResult<Prisma.$FileBuildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileBuild that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileBuildFindUniqueOrThrowArgs} args - Arguments to find a FileBuild
     * @example
     * // Get one FileBuild
     * const fileBuild = await prisma.fileBuild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileBuildFindUniqueOrThrowArgs>(args: SelectSubset<T, FileBuildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileBuildClient<$Result.GetResult<Prisma.$FileBuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileBuild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileBuildFindFirstArgs} args - Arguments to find a FileBuild
     * @example
     * // Get one FileBuild
     * const fileBuild = await prisma.fileBuild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileBuildFindFirstArgs>(args?: SelectSubset<T, FileBuildFindFirstArgs<ExtArgs>>): Prisma__FileBuildClient<$Result.GetResult<Prisma.$FileBuildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileBuild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileBuildFindFirstOrThrowArgs} args - Arguments to find a FileBuild
     * @example
     * // Get one FileBuild
     * const fileBuild = await prisma.fileBuild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileBuildFindFirstOrThrowArgs>(args?: SelectSubset<T, FileBuildFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileBuildClient<$Result.GetResult<Prisma.$FileBuildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileBuilds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileBuildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileBuilds
     * const fileBuilds = await prisma.fileBuild.findMany()
     * 
     * // Get first 10 FileBuilds
     * const fileBuilds = await prisma.fileBuild.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileBuildWithIdOnly = await prisma.fileBuild.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileBuildFindManyArgs>(args?: SelectSubset<T, FileBuildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileBuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileBuild.
     * @param {FileBuildCreateArgs} args - Arguments to create a FileBuild.
     * @example
     * // Create one FileBuild
     * const FileBuild = await prisma.fileBuild.create({
     *   data: {
     *     // ... data to create a FileBuild
     *   }
     * })
     * 
     */
    create<T extends FileBuildCreateArgs>(args: SelectSubset<T, FileBuildCreateArgs<ExtArgs>>): Prisma__FileBuildClient<$Result.GetResult<Prisma.$FileBuildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileBuilds.
     * @param {FileBuildCreateManyArgs} args - Arguments to create many FileBuilds.
     * @example
     * // Create many FileBuilds
     * const fileBuild = await prisma.fileBuild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileBuildCreateManyArgs>(args?: SelectSubset<T, FileBuildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileBuilds and returns the data saved in the database.
     * @param {FileBuildCreateManyAndReturnArgs} args - Arguments to create many FileBuilds.
     * @example
     * // Create many FileBuilds
     * const fileBuild = await prisma.fileBuild.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileBuilds and only return the `id`
     * const fileBuildWithIdOnly = await prisma.fileBuild.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileBuildCreateManyAndReturnArgs>(args?: SelectSubset<T, FileBuildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileBuildPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileBuild.
     * @param {FileBuildDeleteArgs} args - Arguments to delete one FileBuild.
     * @example
     * // Delete one FileBuild
     * const FileBuild = await prisma.fileBuild.delete({
     *   where: {
     *     // ... filter to delete one FileBuild
     *   }
     * })
     * 
     */
    delete<T extends FileBuildDeleteArgs>(args: SelectSubset<T, FileBuildDeleteArgs<ExtArgs>>): Prisma__FileBuildClient<$Result.GetResult<Prisma.$FileBuildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileBuild.
     * @param {FileBuildUpdateArgs} args - Arguments to update one FileBuild.
     * @example
     * // Update one FileBuild
     * const fileBuild = await prisma.fileBuild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileBuildUpdateArgs>(args: SelectSubset<T, FileBuildUpdateArgs<ExtArgs>>): Prisma__FileBuildClient<$Result.GetResult<Prisma.$FileBuildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileBuilds.
     * @param {FileBuildDeleteManyArgs} args - Arguments to filter FileBuilds to delete.
     * @example
     * // Delete a few FileBuilds
     * const { count } = await prisma.fileBuild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileBuildDeleteManyArgs>(args?: SelectSubset<T, FileBuildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileBuilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileBuildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileBuilds
     * const fileBuild = await prisma.fileBuild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileBuildUpdateManyArgs>(args: SelectSubset<T, FileBuildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileBuilds and returns the data updated in the database.
     * @param {FileBuildUpdateManyAndReturnArgs} args - Arguments to update many FileBuilds.
     * @example
     * // Update many FileBuilds
     * const fileBuild = await prisma.fileBuild.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileBuilds and only return the `id`
     * const fileBuildWithIdOnly = await prisma.fileBuild.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FileBuildUpdateManyAndReturnArgs>(args: SelectSubset<T, FileBuildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileBuildPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileBuild.
     * @param {FileBuildUpsertArgs} args - Arguments to update or create a FileBuild.
     * @example
     * // Update or create a FileBuild
     * const fileBuild = await prisma.fileBuild.upsert({
     *   create: {
     *     // ... data to create a FileBuild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileBuild we want to update
     *   }
     * })
     */
    upsert<T extends FileBuildUpsertArgs>(args: SelectSubset<T, FileBuildUpsertArgs<ExtArgs>>): Prisma__FileBuildClient<$Result.GetResult<Prisma.$FileBuildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileBuilds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileBuildCountArgs} args - Arguments to filter FileBuilds to count.
     * @example
     * // Count the number of FileBuilds
     * const count = await prisma.fileBuild.count({
     *   where: {
     *     // ... the filter for the FileBuilds we want to count
     *   }
     * })
    **/
    count<T extends FileBuildCountArgs>(
      args?: Subset<T, FileBuildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileBuildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileBuild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileBuildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileBuildAggregateArgs>(args: Subset<T, FileBuildAggregateArgs>): Prisma.PrismaPromise<GetFileBuildAggregateType<T>>

    /**
     * Group by FileBuild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileBuildGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileBuildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileBuildGroupByArgs['orderBy'] }
        : { orderBy?: FileBuildGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileBuildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileBuildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileBuild model
   */
  readonly fields: FileBuildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileBuild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileBuildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fileType<T extends FileTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FileTypeDefaultArgs<ExtArgs>>): Prisma__FileTypeClient<$Result.GetResult<Prisma.$FileTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FileBuild model
   */
  interface FileBuildFieldRefs {
    readonly id: FieldRef<"FileBuild", 'Int'>
    readonly fileName: FieldRef<"FileBuild", 'String'>
    readonly numbers_created: FieldRef<"FileBuild", 'Int'>
    readonly fileTypeId: FieldRef<"FileBuild", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FileBuild findUnique
   */
  export type FileBuildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileBuild
     */
    select?: FileBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileBuild
     */
    omit?: FileBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileBuildInclude<ExtArgs> | null
    /**
     * Filter, which FileBuild to fetch.
     */
    where: FileBuildWhereUniqueInput
  }

  /**
   * FileBuild findUniqueOrThrow
   */
  export type FileBuildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileBuild
     */
    select?: FileBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileBuild
     */
    omit?: FileBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileBuildInclude<ExtArgs> | null
    /**
     * Filter, which FileBuild to fetch.
     */
    where: FileBuildWhereUniqueInput
  }

  /**
   * FileBuild findFirst
   */
  export type FileBuildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileBuild
     */
    select?: FileBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileBuild
     */
    omit?: FileBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileBuildInclude<ExtArgs> | null
    /**
     * Filter, which FileBuild to fetch.
     */
    where?: FileBuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileBuilds to fetch.
     */
    orderBy?: FileBuildOrderByWithRelationInput | FileBuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileBuilds.
     */
    cursor?: FileBuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileBuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileBuilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileBuilds.
     */
    distinct?: FileBuildScalarFieldEnum | FileBuildScalarFieldEnum[]
  }

  /**
   * FileBuild findFirstOrThrow
   */
  export type FileBuildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileBuild
     */
    select?: FileBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileBuild
     */
    omit?: FileBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileBuildInclude<ExtArgs> | null
    /**
     * Filter, which FileBuild to fetch.
     */
    where?: FileBuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileBuilds to fetch.
     */
    orderBy?: FileBuildOrderByWithRelationInput | FileBuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileBuilds.
     */
    cursor?: FileBuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileBuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileBuilds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileBuilds.
     */
    distinct?: FileBuildScalarFieldEnum | FileBuildScalarFieldEnum[]
  }

  /**
   * FileBuild findMany
   */
  export type FileBuildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileBuild
     */
    select?: FileBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileBuild
     */
    omit?: FileBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileBuildInclude<ExtArgs> | null
    /**
     * Filter, which FileBuilds to fetch.
     */
    where?: FileBuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileBuilds to fetch.
     */
    orderBy?: FileBuildOrderByWithRelationInput | FileBuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileBuilds.
     */
    cursor?: FileBuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileBuilds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileBuilds.
     */
    skip?: number
    distinct?: FileBuildScalarFieldEnum | FileBuildScalarFieldEnum[]
  }

  /**
   * FileBuild create
   */
  export type FileBuildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileBuild
     */
    select?: FileBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileBuild
     */
    omit?: FileBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileBuildInclude<ExtArgs> | null
    /**
     * The data needed to create a FileBuild.
     */
    data: XOR<FileBuildCreateInput, FileBuildUncheckedCreateInput>
  }

  /**
   * FileBuild createMany
   */
  export type FileBuildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileBuilds.
     */
    data: FileBuildCreateManyInput | FileBuildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileBuild createManyAndReturn
   */
  export type FileBuildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileBuild
     */
    select?: FileBuildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileBuild
     */
    omit?: FileBuildOmit<ExtArgs> | null
    /**
     * The data used to create many FileBuilds.
     */
    data: FileBuildCreateManyInput | FileBuildCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileBuildIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileBuild update
   */
  export type FileBuildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileBuild
     */
    select?: FileBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileBuild
     */
    omit?: FileBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileBuildInclude<ExtArgs> | null
    /**
     * The data needed to update a FileBuild.
     */
    data: XOR<FileBuildUpdateInput, FileBuildUncheckedUpdateInput>
    /**
     * Choose, which FileBuild to update.
     */
    where: FileBuildWhereUniqueInput
  }

  /**
   * FileBuild updateMany
   */
  export type FileBuildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileBuilds.
     */
    data: XOR<FileBuildUpdateManyMutationInput, FileBuildUncheckedUpdateManyInput>
    /**
     * Filter which FileBuilds to update
     */
    where?: FileBuildWhereInput
    /**
     * Limit how many FileBuilds to update.
     */
    limit?: number
  }

  /**
   * FileBuild updateManyAndReturn
   */
  export type FileBuildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileBuild
     */
    select?: FileBuildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileBuild
     */
    omit?: FileBuildOmit<ExtArgs> | null
    /**
     * The data used to update FileBuilds.
     */
    data: XOR<FileBuildUpdateManyMutationInput, FileBuildUncheckedUpdateManyInput>
    /**
     * Filter which FileBuilds to update
     */
    where?: FileBuildWhereInput
    /**
     * Limit how many FileBuilds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileBuildIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileBuild upsert
   */
  export type FileBuildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileBuild
     */
    select?: FileBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileBuild
     */
    omit?: FileBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileBuildInclude<ExtArgs> | null
    /**
     * The filter to search for the FileBuild to update in case it exists.
     */
    where: FileBuildWhereUniqueInput
    /**
     * In case the FileBuild found by the `where` argument doesn't exist, create a new FileBuild with this data.
     */
    create: XOR<FileBuildCreateInput, FileBuildUncheckedCreateInput>
    /**
     * In case the FileBuild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileBuildUpdateInput, FileBuildUncheckedUpdateInput>
  }

  /**
   * FileBuild delete
   */
  export type FileBuildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileBuild
     */
    select?: FileBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileBuild
     */
    omit?: FileBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileBuildInclude<ExtArgs> | null
    /**
     * Filter which FileBuild to delete.
     */
    where: FileBuildWhereUniqueInput
  }

  /**
   * FileBuild deleteMany
   */
  export type FileBuildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileBuilds to delete
     */
    where?: FileBuildWhereInput
    /**
     * Limit how many FileBuilds to delete.
     */
    limit?: number
  }

  /**
   * FileBuild without action
   */
  export type FileBuildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileBuild
     */
    select?: FileBuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileBuild
     */
    omit?: FileBuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileBuildInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FileTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status'
  };

  export type FileTypeScalarFieldEnum = (typeof FileTypeScalarFieldEnum)[keyof typeof FileTypeScalarFieldEnum]


  export const FileBuildScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    numbers_created: 'numbers_created',
    fileTypeId: 'fileTypeId'
  };

  export type FileBuildScalarFieldEnum = (typeof FileBuildScalarFieldEnum)[keyof typeof FileBuildScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FileTypeWhereInput = {
    AND?: FileTypeWhereInput | FileTypeWhereInput[]
    OR?: FileTypeWhereInput[]
    NOT?: FileTypeWhereInput | FileTypeWhereInput[]
    id?: IntFilter<"FileType"> | number
    name?: StringFilter<"FileType"> | string
    status?: BoolFilter<"FileType"> | boolean
    builds?: FileBuildListRelationFilter
  }

  export type FileTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    builds?: FileBuildOrderByRelationAggregateInput
  }

  export type FileTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: FileTypeWhereInput | FileTypeWhereInput[]
    OR?: FileTypeWhereInput[]
    NOT?: FileTypeWhereInput | FileTypeWhereInput[]
    status?: BoolFilter<"FileType"> | boolean
    builds?: FileBuildListRelationFilter
  }, "id" | "name">

  export type FileTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    _count?: FileTypeCountOrderByAggregateInput
    _avg?: FileTypeAvgOrderByAggregateInput
    _max?: FileTypeMaxOrderByAggregateInput
    _min?: FileTypeMinOrderByAggregateInput
    _sum?: FileTypeSumOrderByAggregateInput
  }

  export type FileTypeScalarWhereWithAggregatesInput = {
    AND?: FileTypeScalarWhereWithAggregatesInput | FileTypeScalarWhereWithAggregatesInput[]
    OR?: FileTypeScalarWhereWithAggregatesInput[]
    NOT?: FileTypeScalarWhereWithAggregatesInput | FileTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FileType"> | number
    name?: StringWithAggregatesFilter<"FileType"> | string
    status?: BoolWithAggregatesFilter<"FileType"> | boolean
  }

  export type FileBuildWhereInput = {
    AND?: FileBuildWhereInput | FileBuildWhereInput[]
    OR?: FileBuildWhereInput[]
    NOT?: FileBuildWhereInput | FileBuildWhereInput[]
    id?: IntFilter<"FileBuild"> | number
    fileName?: StringFilter<"FileBuild"> | string
    numbers_created?: IntFilter<"FileBuild"> | number
    fileTypeId?: IntFilter<"FileBuild"> | number
    fileType?: XOR<FileTypeScalarRelationFilter, FileTypeWhereInput>
  }

  export type FileBuildOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    numbers_created?: SortOrder
    fileTypeId?: SortOrder
    fileType?: FileTypeOrderByWithRelationInput
  }

  export type FileBuildWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FileBuildWhereInput | FileBuildWhereInput[]
    OR?: FileBuildWhereInput[]
    NOT?: FileBuildWhereInput | FileBuildWhereInput[]
    fileName?: StringFilter<"FileBuild"> | string
    numbers_created?: IntFilter<"FileBuild"> | number
    fileTypeId?: IntFilter<"FileBuild"> | number
    fileType?: XOR<FileTypeScalarRelationFilter, FileTypeWhereInput>
  }, "id">

  export type FileBuildOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    numbers_created?: SortOrder
    fileTypeId?: SortOrder
    _count?: FileBuildCountOrderByAggregateInput
    _avg?: FileBuildAvgOrderByAggregateInput
    _max?: FileBuildMaxOrderByAggregateInput
    _min?: FileBuildMinOrderByAggregateInput
    _sum?: FileBuildSumOrderByAggregateInput
  }

  export type FileBuildScalarWhereWithAggregatesInput = {
    AND?: FileBuildScalarWhereWithAggregatesInput | FileBuildScalarWhereWithAggregatesInput[]
    OR?: FileBuildScalarWhereWithAggregatesInput[]
    NOT?: FileBuildScalarWhereWithAggregatesInput | FileBuildScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FileBuild"> | number
    fileName?: StringWithAggregatesFilter<"FileBuild"> | string
    numbers_created?: IntWithAggregatesFilter<"FileBuild"> | number
    fileTypeId?: IntWithAggregatesFilter<"FileBuild"> | number
  }

  export type FileTypeCreateInput = {
    name: string
    status: boolean
    builds?: FileBuildCreateNestedManyWithoutFileTypeInput
  }

  export type FileTypeUncheckedCreateInput = {
    id?: number
    name: string
    status: boolean
    builds?: FileBuildUncheckedCreateNestedManyWithoutFileTypeInput
  }

  export type FileTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    builds?: FileBuildUpdateManyWithoutFileTypeNestedInput
  }

  export type FileTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    builds?: FileBuildUncheckedUpdateManyWithoutFileTypeNestedInput
  }

  export type FileTypeCreateManyInput = {
    id?: number
    name: string
    status: boolean
  }

  export type FileTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FileTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FileBuildCreateInput = {
    fileName: string
    numbers_created: number
    fileType: FileTypeCreateNestedOneWithoutBuildsInput
  }

  export type FileBuildUncheckedCreateInput = {
    id?: number
    fileName: string
    numbers_created: number
    fileTypeId: number
  }

  export type FileBuildUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    numbers_created?: IntFieldUpdateOperationsInput | number
    fileType?: FileTypeUpdateOneRequiredWithoutBuildsNestedInput
  }

  export type FileBuildUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    numbers_created?: IntFieldUpdateOperationsInput | number
    fileTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type FileBuildCreateManyInput = {
    id?: number
    fileName: string
    numbers_created: number
    fileTypeId: number
  }

  export type FileBuildUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    numbers_created?: IntFieldUpdateOperationsInput | number
  }

  export type FileBuildUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    numbers_created?: IntFieldUpdateOperationsInput | number
    fileTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FileBuildListRelationFilter = {
    every?: FileBuildWhereInput
    some?: FileBuildWhereInput
    none?: FileBuildWhereInput
  }

  export type FileBuildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
  }

  export type FileTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FileTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
  }

  export type FileTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
  }

  export type FileTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FileTypeScalarRelationFilter = {
    is?: FileTypeWhereInput
    isNot?: FileTypeWhereInput
  }

  export type FileBuildCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    numbers_created?: SortOrder
    fileTypeId?: SortOrder
  }

  export type FileBuildAvgOrderByAggregateInput = {
    id?: SortOrder
    numbers_created?: SortOrder
    fileTypeId?: SortOrder
  }

  export type FileBuildMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    numbers_created?: SortOrder
    fileTypeId?: SortOrder
  }

  export type FileBuildMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    numbers_created?: SortOrder
    fileTypeId?: SortOrder
  }

  export type FileBuildSumOrderByAggregateInput = {
    id?: SortOrder
    numbers_created?: SortOrder
    fileTypeId?: SortOrder
  }

  export type FileBuildCreateNestedManyWithoutFileTypeInput = {
    create?: XOR<FileBuildCreateWithoutFileTypeInput, FileBuildUncheckedCreateWithoutFileTypeInput> | FileBuildCreateWithoutFileTypeInput[] | FileBuildUncheckedCreateWithoutFileTypeInput[]
    connectOrCreate?: FileBuildCreateOrConnectWithoutFileTypeInput | FileBuildCreateOrConnectWithoutFileTypeInput[]
    createMany?: FileBuildCreateManyFileTypeInputEnvelope
    connect?: FileBuildWhereUniqueInput | FileBuildWhereUniqueInput[]
  }

  export type FileBuildUncheckedCreateNestedManyWithoutFileTypeInput = {
    create?: XOR<FileBuildCreateWithoutFileTypeInput, FileBuildUncheckedCreateWithoutFileTypeInput> | FileBuildCreateWithoutFileTypeInput[] | FileBuildUncheckedCreateWithoutFileTypeInput[]
    connectOrCreate?: FileBuildCreateOrConnectWithoutFileTypeInput | FileBuildCreateOrConnectWithoutFileTypeInput[]
    createMany?: FileBuildCreateManyFileTypeInputEnvelope
    connect?: FileBuildWhereUniqueInput | FileBuildWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FileBuildUpdateManyWithoutFileTypeNestedInput = {
    create?: XOR<FileBuildCreateWithoutFileTypeInput, FileBuildUncheckedCreateWithoutFileTypeInput> | FileBuildCreateWithoutFileTypeInput[] | FileBuildUncheckedCreateWithoutFileTypeInput[]
    connectOrCreate?: FileBuildCreateOrConnectWithoutFileTypeInput | FileBuildCreateOrConnectWithoutFileTypeInput[]
    upsert?: FileBuildUpsertWithWhereUniqueWithoutFileTypeInput | FileBuildUpsertWithWhereUniqueWithoutFileTypeInput[]
    createMany?: FileBuildCreateManyFileTypeInputEnvelope
    set?: FileBuildWhereUniqueInput | FileBuildWhereUniqueInput[]
    disconnect?: FileBuildWhereUniqueInput | FileBuildWhereUniqueInput[]
    delete?: FileBuildWhereUniqueInput | FileBuildWhereUniqueInput[]
    connect?: FileBuildWhereUniqueInput | FileBuildWhereUniqueInput[]
    update?: FileBuildUpdateWithWhereUniqueWithoutFileTypeInput | FileBuildUpdateWithWhereUniqueWithoutFileTypeInput[]
    updateMany?: FileBuildUpdateManyWithWhereWithoutFileTypeInput | FileBuildUpdateManyWithWhereWithoutFileTypeInput[]
    deleteMany?: FileBuildScalarWhereInput | FileBuildScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FileBuildUncheckedUpdateManyWithoutFileTypeNestedInput = {
    create?: XOR<FileBuildCreateWithoutFileTypeInput, FileBuildUncheckedCreateWithoutFileTypeInput> | FileBuildCreateWithoutFileTypeInput[] | FileBuildUncheckedCreateWithoutFileTypeInput[]
    connectOrCreate?: FileBuildCreateOrConnectWithoutFileTypeInput | FileBuildCreateOrConnectWithoutFileTypeInput[]
    upsert?: FileBuildUpsertWithWhereUniqueWithoutFileTypeInput | FileBuildUpsertWithWhereUniqueWithoutFileTypeInput[]
    createMany?: FileBuildCreateManyFileTypeInputEnvelope
    set?: FileBuildWhereUniqueInput | FileBuildWhereUniqueInput[]
    disconnect?: FileBuildWhereUniqueInput | FileBuildWhereUniqueInput[]
    delete?: FileBuildWhereUniqueInput | FileBuildWhereUniqueInput[]
    connect?: FileBuildWhereUniqueInput | FileBuildWhereUniqueInput[]
    update?: FileBuildUpdateWithWhereUniqueWithoutFileTypeInput | FileBuildUpdateWithWhereUniqueWithoutFileTypeInput[]
    updateMany?: FileBuildUpdateManyWithWhereWithoutFileTypeInput | FileBuildUpdateManyWithWhereWithoutFileTypeInput[]
    deleteMany?: FileBuildScalarWhereInput | FileBuildScalarWhereInput[]
  }

  export type FileTypeCreateNestedOneWithoutBuildsInput = {
    create?: XOR<FileTypeCreateWithoutBuildsInput, FileTypeUncheckedCreateWithoutBuildsInput>
    connectOrCreate?: FileTypeCreateOrConnectWithoutBuildsInput
    connect?: FileTypeWhereUniqueInput
  }

  export type FileTypeUpdateOneRequiredWithoutBuildsNestedInput = {
    create?: XOR<FileTypeCreateWithoutBuildsInput, FileTypeUncheckedCreateWithoutBuildsInput>
    connectOrCreate?: FileTypeCreateOrConnectWithoutBuildsInput
    upsert?: FileTypeUpsertWithoutBuildsInput
    connect?: FileTypeWhereUniqueInput
    update?: XOR<XOR<FileTypeUpdateToOneWithWhereWithoutBuildsInput, FileTypeUpdateWithoutBuildsInput>, FileTypeUncheckedUpdateWithoutBuildsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FileBuildCreateWithoutFileTypeInput = {
    fileName: string
    numbers_created: number
  }

  export type FileBuildUncheckedCreateWithoutFileTypeInput = {
    id?: number
    fileName: string
    numbers_created: number
  }

  export type FileBuildCreateOrConnectWithoutFileTypeInput = {
    where: FileBuildWhereUniqueInput
    create: XOR<FileBuildCreateWithoutFileTypeInput, FileBuildUncheckedCreateWithoutFileTypeInput>
  }

  export type FileBuildCreateManyFileTypeInputEnvelope = {
    data: FileBuildCreateManyFileTypeInput | FileBuildCreateManyFileTypeInput[]
    skipDuplicates?: boolean
  }

  export type FileBuildUpsertWithWhereUniqueWithoutFileTypeInput = {
    where: FileBuildWhereUniqueInput
    update: XOR<FileBuildUpdateWithoutFileTypeInput, FileBuildUncheckedUpdateWithoutFileTypeInput>
    create: XOR<FileBuildCreateWithoutFileTypeInput, FileBuildUncheckedCreateWithoutFileTypeInput>
  }

  export type FileBuildUpdateWithWhereUniqueWithoutFileTypeInput = {
    where: FileBuildWhereUniqueInput
    data: XOR<FileBuildUpdateWithoutFileTypeInput, FileBuildUncheckedUpdateWithoutFileTypeInput>
  }

  export type FileBuildUpdateManyWithWhereWithoutFileTypeInput = {
    where: FileBuildScalarWhereInput
    data: XOR<FileBuildUpdateManyMutationInput, FileBuildUncheckedUpdateManyWithoutFileTypeInput>
  }

  export type FileBuildScalarWhereInput = {
    AND?: FileBuildScalarWhereInput | FileBuildScalarWhereInput[]
    OR?: FileBuildScalarWhereInput[]
    NOT?: FileBuildScalarWhereInput | FileBuildScalarWhereInput[]
    id?: IntFilter<"FileBuild"> | number
    fileName?: StringFilter<"FileBuild"> | string
    numbers_created?: IntFilter<"FileBuild"> | number
    fileTypeId?: IntFilter<"FileBuild"> | number
  }

  export type FileTypeCreateWithoutBuildsInput = {
    name: string
    status: boolean
  }

  export type FileTypeUncheckedCreateWithoutBuildsInput = {
    id?: number
    name: string
    status: boolean
  }

  export type FileTypeCreateOrConnectWithoutBuildsInput = {
    where: FileTypeWhereUniqueInput
    create: XOR<FileTypeCreateWithoutBuildsInput, FileTypeUncheckedCreateWithoutBuildsInput>
  }

  export type FileTypeUpsertWithoutBuildsInput = {
    update: XOR<FileTypeUpdateWithoutBuildsInput, FileTypeUncheckedUpdateWithoutBuildsInput>
    create: XOR<FileTypeCreateWithoutBuildsInput, FileTypeUncheckedCreateWithoutBuildsInput>
    where?: FileTypeWhereInput
  }

  export type FileTypeUpdateToOneWithWhereWithoutBuildsInput = {
    where?: FileTypeWhereInput
    data: XOR<FileTypeUpdateWithoutBuildsInput, FileTypeUncheckedUpdateWithoutBuildsInput>
  }

  export type FileTypeUpdateWithoutBuildsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FileTypeUncheckedUpdateWithoutBuildsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FileBuildCreateManyFileTypeInput = {
    id?: number
    fileName: string
    numbers_created: number
  }

  export type FileBuildUpdateWithoutFileTypeInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    numbers_created?: IntFieldUpdateOperationsInput | number
  }

  export type FileBuildUncheckedUpdateWithoutFileTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    numbers_created?: IntFieldUpdateOperationsInput | number
  }

  export type FileBuildUncheckedUpdateManyWithoutFileTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    numbers_created?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}